// Statically load all "local" components that aren't yet in the npm package
import ActionButtons from "./src/dx2hero/ActionButtons";
import Assignment from "./src/dx2hero/Assignment";
import AssignmentCard from "./src/dx2hero/AssignmentCard";
import AutoComplete from "./src/dx2hero/AutoComplete";
import Date from "./src/dx2hero/Date";
import DefaultForm from "./src/dx2hero/DefaultForm";
import Dropdown from "./src/dx2hero/Dropdown";
import Email from "./src/dx2hero/Email";
import FlowContainer from "./src/dx2hero/FlowContainer";
import MultiStep from "./src/dx2hero/MultiStep";
import Phone from "./src/dx2hero/Phone";
import RadioButtons from "./src/dx2hero/RadioButtons";
import TextArea from "./src/dx2hero/TextArea";
import TextInput from "./src/dx2hero/TextInput";
import ToDo from "./src/dx2hero/ToDo";
import TwoColumn from "./src/dx2hero/TwoColumn";
/*import end - DO NOT REMOVE*/

// localSdkComponentMap is the JSON object where we store the components that are
// found locally. If not found here, look in the Pega-provided component map.

const localSdkComponentMap = {
  ActionButtons: ActionButtons,
  Assignment: Assignment,
  AssignmentCard: AssignmentCard,
  AutoComplete: AutoComplete,
  Currency: TextInput,
  Decimal: TextInput,
  Date: Date,
  DefaultForm: DefaultForm,
  Dropdown: Dropdown,
  Email: Email,
  FlowContainer: FlowContainer,
  MultiStep: MultiStep,
  Phone: Phone,
  RadioButtons: RadioButtons,
  TextArea: TextArea,
  TextInput: TextInput,
  Todo: ToDo, // NOTE: ConstellationJS Engine uses "Todo" and not "ToDo"!!!
  TwoColumn: TwoColumn,
  /*map end - DO NOT REMOVE*/
};

export default localSdkComponentMap;
