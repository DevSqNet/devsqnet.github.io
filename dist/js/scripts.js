
$(document).ready(function() {
    $(document).languageDetection({
        domain        :  'https://devsq.net',
        languages   :   [
            {
                code : 'en',
                path : '',
                defaultLanguage : true
            },
            {
                code : 'fa',
                path : '/index.fa.html'
            },
            {
                code : 'fa-ir',
                path : '/index.fa.html'
            },
            {
                code : 'es',
                path : '/index.es.html'
            }
        ]   
    });
});