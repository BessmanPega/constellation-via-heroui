import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const sectionTitle = tv({
  base: "text-2xl lg:text-3xl font-semibold tracking-tight text-foreground",
  variants: {
    color: {
      default: "text-foreground",
      primary: "text-primary",
      accent: "text-accent-600 dark:text-accent-400",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export const sectionSubtitle = tv({
  base: "text-base lg:text-lg text-default-500 mt-2",
  variants: {
    color: {
      default: "text-default-500",
      muted: "text-default-400",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export const label = tv({
  base: "text-sm font-medium text-default-700 dark:text-default-600",
  variants: {
    required: {
      true: "after:content-['*'] after:ml-1 after:text-danger",
    },
  },
});

export const caption = tv({
  base: "text-xs text-default-500 mt-1",
});
