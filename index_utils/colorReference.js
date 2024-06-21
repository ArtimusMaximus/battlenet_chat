
    let colors = `<div class="col-start-2 col-end-3 flex flex-col items-center justify-center">
        <div class="bg-primary p-5">bg-primary</div>
        <div class="bg-primary-focus p-5">bg-primary-focus</div>
        <div class="bg-primary-content p-5">bg-primary-content</div>
        <div class="bg-secondary p-5">bg-secondary</div>
        <div class="bg-secondary-focus p-5">bg-secondary-focus</div>
        <div class="bg-secondary-content p-5">bg-secondary-content</div>
        <div class="bg-accent p-5">bg-accent</div>
        <div class="bg-accent-focus p-5">bg-accent-focus</div>
        <div class="bg-accent-content p-5">bg-accent-content</div>
        <div class="bg-neutral p-5">bg-neutral</div>
        <div class="bg-neutral-focus p-5">bg-neutral-focus</div>
        <div class="bg-neutral-content p-5">bg-neutral-content</div>
        <div class="bg-base-100 p-5">base-100</div>
        <div class="bg-base-200 p-5">base-200</div>
        <div class="bg-base-300 p-5">base-300</div>
        <div class="bg-base-content p-5">base-content</div>
        <div class="bg-info p-5">bg-info</div>
        <div class="bg-info-content p-5">bg-info-content</div>
        <div class="bg-success p-5">bg-success</div>
        <div class="bg-success-content p-5">bg-success-content</div>
        <div class="bg-warning p-5">warning</div>
        <div class="bg-warning-content p-5">warning-content</div>
        <div class="bg-error p-5">error</div>
        <div class="bg-error-content p-5">error-content</div>
    </div>`
    document.querySelector('#colorReference')
    .innerHTML = colors;

    (function openColorRef() {
    document.querySelector('#openColorRef')
        .addEventListener('click', e => {
            document.querySelector('#colorReference')
                .showModal();
        })
    })();
    (function closeColorRef() {
    window.addEventListener('click', e => {
        if (e.target.id !== 'openColorRef') document.querySelector('#colorReference').close();
    })
    })();
