class App extends React.Component {
     render() {
     return <div id="ff-compose"></div>;
     }
    componentDidMount(){
    var script = document.createElement("script");
     script.id = "ff-script";
    script.src = "https://formfacade.com/include/106317092390516856145/form/1FAIpQLSffQ38vPZjITAA3Ahb6Ckmh4OtCHxy_3F-2bT0R8vuri0Ej9g/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
}
}