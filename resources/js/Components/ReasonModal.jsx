import React from 'react'

const ReasonModal = ({show , onClose , reason}) => {
  return (
    <>
    {show && (
    <div>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-[2px] transition-opacity duration-300" id="modal-overlay">
    <div className="bg-surface-container-lowest w-full max-w-[480px] rounded-2xl shadow-2xl border border-outline-variant overflow-hidden transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95">
        <div className="flex justify-between items-center p-6 border-b border-outline-variant bg-surface-bright">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Rejection Reason</h3>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors" onClick={onClose}>
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>
        <div className="p-6">
            <div className="flex items-start gap-4 bg-error-container/10 p-4 rounded-xl border border-error/10 mb-2">
                <div className="bg-error text-on-error w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">error</span>
                </div>
                <div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        {reason}                    </p>
                </div>
            </div>
            
        </div>
        <div className="flex justify-end p-6 border-t border-outline-variant bg-surface-container-low">
            <button className="bg-primary text-on-primary px-8 py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-md" onClick={onClose}>
                OK
            </button>
        </div>
    </div>
</div>
    </div>
    )}
    </>
  )
}

export default ReasonModal
