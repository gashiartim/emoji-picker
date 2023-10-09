import {
  Fragment,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
} from "react";
import { Popover as HeadlessPopover, Transition } from "@headlessui/react";

export interface PopoverProps extends PropsWithChildren {
  button: ReactNode;
}

const Popover: FunctionComponent<PopoverProps> = ({ children, button }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <HeadlessPopover className="relative">
        {({ open }) => (
          <>
            <HeadlessPopover.Button
              className={`
              ${open ? "" : "text-opacity-90"}
              group inline-flex items-center hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              {button}
            </HeadlessPopover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <HeadlessPopover.Panel>
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  {children}
                </div>
              </HeadlessPopover.Panel>
            </Transition>
          </>
        )}
      </HeadlessPopover>
    </div>
  );
};

export default Popover;
