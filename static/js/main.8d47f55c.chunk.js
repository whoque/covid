(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{17:function(e,a,t){e.exports=t(40)},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(11),c=t.n(n),r=t(12),s=t(13),o=t(15),l=t(16),i=t(0),d=t.n(i),m=t(14),u=t.n(m).a.create({baseURL:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"2be1416b64msh151647cdfaee04cp1470d7jsnddf4e5ad8fec"},params:{country:"India"}}),v=(t(39),function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={country:"India",lastUpdate:"",confirmed:null,deaths:null,recovered:null},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.get("?country=India").then((function(a){console.log(a.data.stat_by_country[a.data.stat_by_country.length-1]);var t=a.data.stat_by_country[a.data.stat_by_country.length-1],n=t.country_name,c=t.record_date,r=t.total_cases,s=t.total_deaths,o=t.total_recovered,l=new Date(c);e.setState({country:n,lastUpdate:l,confirmed:r,deaths:s,recovered:o})}))}},{key:"renderStats",value:function(){return d.a.createElement("div",{className:"wrapper"},d.a.createElement("div",{className:"title"},d.a.createElement("h2",{className:"ui header"},d.a.createElement("i",{className:"medkit icon large white"}),d.a.createElement("div",{className:"content titleContent"},"COVID-19 INDIA STATISTICS"))),d.a.createElement("div",{className:"content"},d.a.createElement("div",{className:"block"},d.a.createElement("div",{className:"key"},"Confirmed cases"),d.a.createElement("div",{className:"value"},this.state.confirmed)),d.a.createElement("div",{className:"block"},d.a.createElement("div",{className:"key"},"Deaths"),d.a.createElement("div",{className:"value"},this.state.deaths)),d.a.createElement("div",{className:"block"},d.a.createElement("div",{className:"key"},"Recovered"),d.a.createElement("div",{className:"value"},this.state.recovered))),d.a.createElement("div",{className:"lastUpdated"},"Last updated at ".concat(this.state.lastUpdate)))}},{key:"render",value:function(){return d.a.createElement("div",null,this.renderStats())}}]),t}(d.a.Component));c.a.render(d.a.createElement(v,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8d47f55c.chunk.js.map