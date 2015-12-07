var cssId = 'fadeTheFlairs';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githubusercontent.com/PhoenixAvenger/r-nfl-fade-the-flairs/master/fadetheflairs.css';
    link.media = 'all';
    head.appendChild(link);
}