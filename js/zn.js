let v = 0;
const d = 0.9;
const s = 0.16;

function w(e) {
    e.preventDefault();
    v += e.deltaY * s;
    if (!window.a) {
        function a() {
            if (Math.abs(v) < 0.1) {
                v = 0;
                cancelAnimationFrame(window.a);
                window.a = null;
                return;
            }
            window.scrollBy(0, v);
            v *= d;
            window.a = requestAnimationFrame(a);
        }
        a();
    }
}

window.addEventListener('wheel', w, { passive: false });    