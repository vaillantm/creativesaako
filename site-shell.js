(function () {
    var navItems = [
        { href: 'index.html', label: 'Home', match: 'index.html' },
        { href: 'program.html', label: 'Program', match: 'program.html' },
        { href: 'apply.html', label: 'Apply', match: 'apply.html' },
        { href: 'community.html', label: 'Community', match: 'community.html' },
        { href: 'about.html', label: 'About', match: 'about.html' }
    ];

    var currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    function linkClass(item) {
        if (currentFile === item.match) {
            return 'font-label-md text-label-md text-primary font-bold border-b-2 border-primary-container pb-1';
        }
        return 'font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors';
    }

    var links = navItems.map(function (item) {
        return '<a class="' + linkClass(item) + '" href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    var navHtml =
        '<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md dark:bg-surface/80 border-b border-outline-variant/30 px-margin-desktop py-4">' +
            '<div class="max-w-container-max mx-auto flex justify-between items-center">' +
                '<span class="text-headline-md font-headline-md font-bold text-primary dark:text-primary">Creative Saako</span>' +
                '<div class="hidden md:flex items-center gap-8">' + links + '</div>' +
                '<a class="bg-primary-container text-white font-label-md text-label-md px-6 py-2.5 rounded-full font-bold active:scale-95 transition-transform" href="community.html">Apply Now</a>' +
            '</div>' +
        '</nav>';

    function injectNav() {
        var mount = document.getElementById('site-nav');
        if (mount) {
            mount.outerHTML = navHtml;
        } else {
            document.body.insertAdjacentHTML('afterbegin', navHtml);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNav);
    } else {
        injectNav();
    }
})();
