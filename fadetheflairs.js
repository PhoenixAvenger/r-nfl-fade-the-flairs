file = location.pathname.split( "/" ).pop();

link = document.createElement( "https://github.com/PhoenixAvenger/r-nfl-fade-the-flairs/blob/master/fadetheflairs.css" );
link.href = file.substr( 0, file.lastIndexOf( "." ) ) + ".css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );