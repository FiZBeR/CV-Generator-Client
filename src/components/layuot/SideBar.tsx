import React from "react";

const SideBar = () => {
  return (
    <div>
      <nav className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 p-md bg-surface-container-low border-r border-outline-variant z-40">
        <div className="mb-xl px-sm">
          <span className="font-title-md text-title-md font-bold text-on-surface">
            Resume AI
          </span>
          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Editor <span className="opacity-60">• Draft 1.0</span>
          </div>
        </div>
        <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-lg font-body-sm text-body-sm mb-lg hover:bg-surface-tint transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Resume
        </button>
        <div className="flex flex-col gap-1 flex-grow">
          {/*<!-- Active Navigation Item -->*/}
          <a
            className="flex items-center gap-3 px-sm py-2 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps scale-[0.98] transition-transform"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              
            >
              edit_note
            </span>
            Builder
          </a>
          <a
            className="flex items-center gap-3 px-sm py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-caps text-label-caps"
            href="#"
          >
            <span className="material-symbols-outlined">history</span>
            History
          </a>
          <a
            className="flex items-center gap-3 px-sm py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-caps text-label-caps"
            href="#"
          >
            <span className="material-symbols-outlined">psychology</span>
            AI Advisor
          </a>
        </div>
        <div className="mt-auto">
          <a
            className="flex items-center gap-3 px-sm py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-caps text-label-caps"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
