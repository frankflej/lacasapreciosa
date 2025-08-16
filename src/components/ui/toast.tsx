"use client";

import * as React from "react";

import { Check, ExclamationMark, Warning, Info } from "@phosphor-icons/react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

interface ToastContextValue {
  setHasDescription: (value: boolean) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(
  undefined
);

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-4 right-4 z-[200] flex max-h-screen w-full flex-col-reverse p-4 sm:w-fit sm:max-w-[380px] sm:min-w-[320px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 ease-in-out data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full hover:shadow-xl",
  {
    variants: {
      status: {
        info: "border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100/50",
        success: "border-green-200 bg-gradient-to-r from-green-50 to-green-100/50",
        warning: "border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/50",
        error: "border-red-200 bg-gradient-to-r from-red-50 to-red-100/50",
      },
    },
    defaultVariants: {
      status: "success",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, status = "success", children, ...props }, ref) => {
  const [hasDescription, setHasDescription] = React.useState(false);
  return (
    <ToastContext.Provider value={{ setHasDescription }}>
      <ToastPrimitives.Root
        ref={ref}
        className={cn(toastVariants({ status }), className)}
        {...props}
      >
        <div className="flex items-start gap-3 w-full pr-6">
          <div
            className={cn(
              "rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center shadow-sm transition-all duration-200",
              {
                "bg-gradient-to-br from-green-400 to-green-500 shadow-green-200/50":
                  status === "success",
                "bg-gradient-to-br from-amber-400 to-amber-500 shadow-amber-200/50":
                  status === "warning",
                "bg-gradient-to-br from-blue-400 to-blue-500 shadow-blue-200/50":
                  status === "info",
                "bg-gradient-to-br from-red-400 to-red-500 shadow-red-200/50":
                  status === "error",
              }
            )}
          >
            {status === "warning" ? (
              <Warning className="w-4 h-4 text-white font-bold" weight="fill" />
            ) : status === "error" ? (
              <ExclamationMark className="w-4 h-4 text-white font-bold" weight="fill" />
            ) : status === "info" ? (
              <Info className="w-4 h-4 text-white font-bold" weight="fill" />
            ) : (
              <Check className="w-4 h-4 text-white font-bold" weight="fill" />
            )}
          </div>
          <div className="flex-grow space-y-0.5">
            {children}
          </div>
        </div>
        <ToastPrimitives.Close
          className="absolute right-2 top-2 rounded-md p-1 text-gray-400 opacity-70 transition-all duration-200 hover:bg-gray-100 hover:text-gray-600 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          <X className="h-3 w-3" />
        </ToastPrimitives.Close>
      </ToastPrimitives.Root>
    </ToastContext.Provider>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1.5 text-foreground/50 opacity-0 transition-opacity text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-0 w-0" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold text-gray-900 leading-tight", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => {
  const context = React.useContext(ToastContext);

  React.useEffect(() => {
    if (context) {
      context.setHasDescription(true);
      return () => context.setHasDescription(false);
    }
  }, [context]);

  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn("text-xs text-gray-600 leading-relaxed", className)}
      {...props}
    />
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
