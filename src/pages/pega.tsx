/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import { useEffect, useMemo, useState } from "react";
import {
  getSdkConfig,
  loginIfNecessary,
  sdkIsLoggedIn,
} from "@pega/auth/lib/sdk-auth-manager";
import { getSdkComponentMap } from "@pega/react-sdk-components/lib/bridge/helpers/sdk_component_map";
import { compareSdkPCoreVersions } from "@pega/react-sdk-components/lib/components/helpers/versionHelpers";
import StoreContext from "@pega/react-sdk-components/lib/bridge/Context/StoreContext";
import createPConnectComponent from "@pega/react-sdk-components/lib/bridge/react_pconnect";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
} from "@heroui/react";

import localSdkComponentMap from "../../sdk-local-component-map";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

declare const myLoadMashup: any;

function RootComponent(props: any) {
  const PegaConnectObj = createPConnectComponent();
  const thePConnObj = <PegaConnectObj {...props} />;

  /**
   * NOTE: For Embedded mode, we add in displayOnlyFA to our React context
   * so it is available to any component that may need it.
   * VRS: Attempted to remove displayOnlyFA but it presently handles various components which
   * SDK does not yet support, so all those need to be fixed up before it can be removed.
   * To be done in a future sprint.
   */
  const contextValue = useMemo(() => {
    return { store: PCore.getStore(), displayOnlyFA: true };
  }, [PCore.getStore()]);

  return (
    <StoreContext.Provider value={contextValue}>
      {thePConnObj}
    </StoreContext.Provider>
  );
}

export default function PegaPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rootProps, setRootProps] = useState({});
  const [caseCreated, setCaseCreated] = useState(false);

  /* My naive attempts to make the cancel button work nicely failed, and I've run out of brain
  juice after getting the "click-away-and-back-again" to work (kludge though it may be). Hence this
  hack: you click cancel, and the page refreshes. I'm sure there's a nicer way to do this. */
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    initialize();
  }, [isLoggedIn]);

  useEffect(() => {
    if (caseCreated) {
      // Subscribe to the EVENT_CANCEL event to handle the assignment cancellation
      PCore.getPubSubUtils().subscribe(
        PCore.getConstants().PUB_SUB_EVENTS.EVENT_CANCEL,
        () => cancelAssignment(),
        "cancelAssignment",
      );

      return () => {
        // unsubscribe to the events
        PCore.getPubSubUtils().unsubscribe(
          PCore.getConstants().PUB_SUB_EVENTS.EVENT_CANCEL,
          "cancelAssignment",
        );
      };
    }
  }, [caseCreated]);

  const cancelAssignment = () => {
    setCancelled(true);
  };

  useEffect(() => {
    if (cancelled) {
      window.location.reload();
    }
  }, [cancelled]);

  const initialize = async () => {
    try {
      // Add event listener for when logged in and constellation bootstrap is loaded
      document.addEventListener("SdkConstellationReady", () =>
        handleSdkConstellationReady(),
      );

      // this function will handle login process, and SdkConstellationReady event will be fired once PCore is ready
      loginIfNecessary({ appName: "embedded", mainRedirect: false });

      if (!isLoggedIn && sdkIsLoggedIn()) {
        console.log(
          "Looks like you clicked away and back again, let's try to get ourselves into a usable condition...",
        );
        handleSdkConstellationReady();
      }
    } catch (error) {
      console.error("Something went wrong during login", error);
    }
  };

  const initializeRootContainerProps = (renderObj: any) => {
    const { props } = renderObj;

    setRootProps(props);
  };

  const startMashup = () => {
    PCore.onPCoreReady(async (renderObj: any) => {
      // Check that we're seeing the PCore version we expect
      compareSdkPCoreVersions();

      await getSdkComponentMap(localSdkComponentMap);

      // Don't call initializeRootContainerProps until SdkComponentMap is fully initialized
      initializeRootContainerProps(renderObj);
    });

    myLoadMashup("pega-root", false); // this is defined in bootstrap shell that's been loaded already
  };

  const handleSdkConstellationReady = () => {
    setIsLoggedIn(true);

    startMashup();
  };

  const createCaseButtonClicked = async () => {
    setCaseCreated(true);

    // Create options object with default values
    const options: any = {
      pageName: "pyEmbedAssignment",
    };

    const sdkConfig = await getSdkConfig();
    let caseType: string = sdkConfig.serverConfig.appMashupCaseType;

    if (!caseType) {
      const availableCaseTypes: Array<any> | string =
        PCore.getEnvironmentInfo().environmentInfoObject?.pyCaseTypeList ??
        "none";

      if (availableCaseTypes === "none") {
        console.log(
          "The Pega environment appears to not have any available case types.",
        );
      } else {
        caseType = availableCaseTypes[0].pyWorkTypeImplementationClassName;
      }
    }

    // Create a new case using the mashup API
    console.log("Using case type: ", caseType);
    PCore.getMashupApi()
      .createCase(caseType, PCore.getConstants().APP.APP, options)
      .then(() => {
        console.log("createCase rendering is complete");
      });
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center py-section-lg">
        {cancelled ? (
          <div className="flex flex-col items-center gap-4">
            <Spinner color="primary" size="lg" />
            <h3 className="text-default-600">Closing your inquiry...</h3>
          </div>
        ) : (
          <div className="inline-block text-center justify-center">
            {!isLoggedIn ? (
              <div className="flex flex-col items-center gap-4">
                <Spinner color="primary" size="lg" />
                <h3 className="text-default-600">
                  One moment while we open your file...
                </h3>
              </div>
            ) : (
              !caseCreated && (
                <div className="max-w-prose">
                  <Card className="card-elevated p-2">
                    <CardHeader className="flex flex-col items-start gap-2 pt-6 px-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary text-2xl">
                        🧳
                      </div>
                      <h1 className={title({ size: "sm" })}>
                        Left Something Behind?
                      </h1>
                    </CardHeader>
                    <CardBody className="px-6">
                      <p className="text-default-600">
                        It happens more often than you'd think — a scarf on
                        the settee, a book by the fire, a watch left on the
                        nightstand. Tell us what's missing and we'll see it
                        found.
                      </p>
                    </CardBody>
                    <CardFooter className="px-6 pb-6">
                      <Button
                        className="btn-transition"
                        color="primary"
                        radius="full"
                        onClick={createCaseButtonClicked}
                      >
                        Report a Lost Item
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )
            )}
            {caseCreated && <RootComponent {...rootProps} />}
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
