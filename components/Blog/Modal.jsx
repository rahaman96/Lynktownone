const { Fragment, useState, useEffect } = require("react");
const { Transition } = require("@headlessui/react");

export default function Home({
    title = "",
    content = "",
    buttons = [],
    classes = "",
    onDiscard = "",
    onConfirm = "",
    _isOpen
}) {
// module.exports = () => {
    let [ isOpen, setIsOpen ] = useState(_isOpen);

    useEffect(() => {
        setIsOpen(isOpen);
        if(!isOpen) {
            document.documentElement.style.overflow = "auto";
        } else {
            // document.documentElement.style.overflow = "hidden";
        }
    }, [isOpen]);
    const HandleChange = () => {
      setIsOpen(!isOpen);
      onDiscard();
    }
    return <>
    {isOpen ? ( 
        <div style={{ position: 'absolute', zIndex: 1000, height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Transition show={isOpen}>
            
              <Transition.Child
                  as={Fragment}
                  enter="transition-all duration-200"
                  enterFrom="opacity-0 scale-75"
                  enterTo="opacity-100 scale-100"
                  leave="transition-all duration-200"
                  leaveTo="opacity-0 scale-75"
                  leaveFrom="opacity-100 scale-100"
              >
                  <div style={{ zIndex: '2' }} className="flex justify-center items-center h-full w-full">
                      <div className={`max-w-[28rem] w-full ${classes ? classes : 'p-4 bg-white rounded-lg'}`}>
                          <div className="w-full flex justify-between items-center">
                          <p className="font-large text-lg" style={{ fontSize: 30 }}></p>
                              <div onClick={() => HandleChange()} className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20">
                                  <svg width="24px" height="24px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                      <path className="clr-i-outline clr-i-outline-path-1" d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z" />
                                      <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
                                  </svg>
                              </div>
                          </div>
                          <p className="font-large text-lg text-center" style={{ fontSize: 30 }}>{title}</p>
                          <div className="w-full">{content}</div>
                          <div className="mt-6 flex justify-end items-center gap-2">
                              {buttons.map((button, index) => (
                                  <button 
                                      onClick={() => {
                                          if(button.role === "discard") {
                                              onDiscard();
                                              setIsOpen(!isOpen);
                                          }
                                          if(button.role === "confirm") {
                                              onConfirm();
                                          }
                                            if(button.role === "Cancel Q") {
                                                setIsOpen(!isOpen);
                                                onDiscard();
                                            }
                                          if(button.toClose) {
                                            setIsOpen(!isOpen);
                                            if(window.onDiscard) {
                                                  onDiscard();
                                            }
                                          }
                                      }}
                                      key={index} 
                                      className={button.classes}
                                  >
                                      {button.label}
                                  </button>
                              ))}
                          </div>
                      </div>
                  </div>
              </Transition.Child>
          </Transition>
        </div>
    ) : (<p></p>)
    }
    </>
}