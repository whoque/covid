import React from "react";

const countryOptions = [
  { value: "Afghanistan", text: "Afghanistan", key: "af", flag: "af" },
  { value: "Aland Islands", text: "Aland Islands", key: "ax", flag: "ax" },
  { value: "Albania", text: "Albania", key: "al", flag: "al" },
  { value: "Algeria", text: "Algeria", key: "dz", flag: "dz" },
  { value: "American Samoa", text: "American Samoa", key: "as", flag: "as" },
  { value: "Andorra", text: "Andorra", key: "ad", flag: "ad" },
  { value: "Angola", text: "Angola", key: "ao", flag: "ao" },
  { value: "Anguilla", text: "Anguilla", key: "ai", flag: "ai" },
  { value: "Antigua", text: "Antigua", key: "ag", flag: "ag" },
  { value: "Argentina", text: "Argentina", key: "ar", flag: "ar" },
  { value: "Armenia", text: "Armenia", key: "am", flag: "am" },
  { value: "Aruba", text: "Aruba", key: "aw", flag: "aw" },
  { value: "Australia", text: "Australia", key: "au", flag: "au" },
  { value: "Austria", text: "Austria", key: "at", flag: "at" },
  { value: "Azerbaijan", text: "Azerbaijan", key: "az", flag: "az" },
  { value: "Bahamas", text: "Bahamas", key: "bs", flag: "bs" },
  { value: "Bahrain", text: "Bahrain", key: "bh", flag: "bh" },
  { value: "Bangladesh", text: "Bangladesh", key: "bd", flag: "bd" },
  { value: "Barbados", text: "Barbados", key: "bb", flag: "bb" },
  { value: "Belarus", text: "Belarus", key: "by", flag: "by" },
  { value: "Belgium", text: "Belgium", key: "be", flag: "be" },
  { value: "Belize", text: "Belize", key: "bz", flag: "bz" },
  { value: "Benin", text: "Benin", key: "bj", flag: "bj" },
  { value: "Bermuda", text: "Bermuda", key: "bm", flag: "bm" },
  { value: "Bhutan", text: "Bhutan", key: "bt", flag: "bt" },
  { value: "Bolivia", text: "Bolivia", key: "bo", flag: "bo" },
  { value: "Bosnia", text: "Bosnia", key: "ba", flag: "ba" },
  { value: "Botswana", text: "Botswana", key: "bw", flag: "bw" },
  { value: "Bouvet Island", text: "Bouvet Island", key: "bv", flag: "bv" },
  { value: "Brazil", text: "Brazil", key: "br", flag: "br" },
  {
    value: "British  Virgin Islands",
    text: "British Virgin Islands",
    key: "vg",
    flag: "vg"
  },
  { value: "Brunei", text: "Brunei", key: "bn", flag: "bn" },
  { value: "Bulgaria", text: "Bulgaria", key: "bg", flag: "bg" },
  { value: "Burkina Faso", text: "Burkina Faso", key: "bf", flag: "bf" },
  { value: "Burma", text: "Burma", key: "mm", flag: "mm", alias: "Myanmar" },
  { value: "Burundi", text: "Burundi", key: "bi", flag: "bi" },
  { value: "Caicos Islands", text: "Caicos Islands", key: "tc", flag: "tc" },
  { value: "Cambodia", text: "Cambodia", key: "kh", flag: "kh" },
  { value: "Cameroon", text: "Cameroon", key: "cm", flag: "cm" },
  { value: "Canada", text: "Canada", key: "ca", flag: "ca" },
  { value: "Cape Verde", text: "Cape Verde", key: "cv", flag: "cv" },
  { value: "Cayman Islands", text: "Cayman Islands", key: "ky", flag: "ky" },
  {
    value: "Central African Republic",
    text: "Central African Republic",
    key: "cf",
    flag: "cf"
  },
  { value: "Chad", text: "Chad", key: "td", flag: "td" },
  { value: "Chile", text: "Chile", key: "cl", flag: "cl" },
  { value: "China", text: "China", key: "cn", flag: "cn" },
  {
    value: "Christmas Island",
    text: "Christmas Island",
    key: "cx",
    flag: "cx"
  },
  { value: "Cocos Islands", text: "Cocos Islands", key: "cc", flag: "cc" },
  { value: "Colombia", text: "Colombia", key: "co", flag: "co" },
  { value: "Comoros", text: "Comoros", key: "km", flag: "km" },
  { value: "Congo", text: "Congo", key: "cd", flag: "cd" },
  {
    value: "Congo Brazzaville",
    text: "Congo Brazzaville",
    key: "cg",
    flag: "cg"
  },
  { value: "Cook Islands", text: "Cook Islands", key: "ck", flag: "ck" },
  { value: "Costa Rica", text: "Costa Rica", key: "cr", flag: "cr" },
  { value: "Cote Divoire", text: "Cote Divoire", key: "ci", flag: "ci" },
  { value: "Croatia", text: "Croatia", key: "hr", flag: "hr" },
  { value: "Cuba", text: "Cuba", key: "cu", flag: "cu" },
  { value: "Cyprus", text: "Cyprus", key: "cy", flag: "cy" },
  { value: "Czech Republic", text: "Czech Republic", key: "cz", flag: "cz" },
  { value: "Denmark", text: "Denmark", key: "dk", flag: "dk" },
  { value: "Djibouti", text: "Djibouti", key: "dj", flag: "dj" },
  { value: "Dominica", text: "Dominica", key: "dm", flag: "dm" },
  {
    value: "Dominican Republic",
    text: "Dominican Republic",
    key: "do",
    flag: "do"
  },
  { value: "Ecuador", text: "Ecuador", key: "ec", flag: "ec" },
  { value: "Egypt", text: "Egypt", key: "eg", flag: "eg" },
  { value: "El Salvador", text: "El Salvador", key: "sv", flag: "sv" },
  {
    value: "Equatorial Guinea",
    text: "Equatorial Guinea",
    key: "gq",
    flag: "gq"
  },
  { value: "Eritrea", text: "Eritrea", key: "er", flag: "er" },
  { value: "Estonia", text: "Estonia", key: "ee", flag: "ee" },
  { value: "Ethiopia", text: "Ethiopia", key: "et", flag: "et" },
  { value: "Europeanunion", text: "Europeanunion", key: "eu", flag: "eu" },
  {
    value: "Falkland Islands",
    text: "Falkland Islands",
    key: "fk",
    flag: "fk"
  },
  { value: "Faroe Islands", text: "Faroe Islands", key: "fo", flag: "fo" },
  { value: "Fiji", text: "Fiji", key: "fj", flag: "fj" },
  { value: "Finland", text: "Finland", key: "fi", flag: "fi" },
  { value: "France", text: "France", key: "fr", flag: "fr" },
  { value: "French Guiana", text: "French Guiana", key: "gf", flag: "gf" },
  {
    value: "French Polynesia",
    text: "French Polynesia",
    key: "pf",
    flag: "pf"
  },
  {
    value: "French Territories",
    text: "French Territories",
    key: "tf",
    flag: "tf"
  },
  { value: "Gabon", text: "Gabon", key: "ga", flag: "ga" },
  { value: "Gambia", text: "Gambia", key: "gm", flag: "gm" },
  { value: "Georgia", text: "Georgia", key: "ge", flag: "ge" },
  { value: "Germany", text: "Germany", key: "de", flag: "de" },
  { value: "Ghana", text: "Ghana", key: "gh", flag: "gh" },
  { value: "Gibraltar", text: "Gibraltar", key: "gi", flag: "gi" },
  { value: "Greece", text: "Greece", key: "gr", flag: "gr" },
  { value: "Greenland", text: "Greenland", key: "gl", flag: "gl" },
  { value: "Grenada", text: "Grenada", key: "gd", flag: "gd" },
  { value: "Guadeloupe", text: "Guadeloupe", key: "gp", flag: "gp" },
  { value: "Guam", text: "Guam", key: "gu", flag: "gu" },
  { value: "Guatemala", text: "Guatemala", key: "gt", flag: "gt" },
  { value: "Guinea", text: "Guinea", key: "gn", flag: "gn" },
  { value: "Guinea-Bissau", text: "Guinea-Bissau", key: "gw", flag: "gw" },
  { value: "Guyana", text: "Guyana", key: "gy", flag: "gy" },
  { value: "Haiti", text: "Haiti", key: "ht", flag: "ht" },
  { value: "Heard Island", text: "Heard Island", key: "hm", flag: "hm" },
  { value: "Honduras", text: "Honduras", key: "hn", flag: "hn" },
  { value: "Hong Kong", text: "Hong Kong", key: "hk", flag: "hk" },
  { value: "Hungary", text: "Hungary", key: "hu", flag: "hu" },
  { value: "Iceland", text: "Iceland", key: "is", flag: "is" },
  { value: "India", text: "India", key: "in", flag: "in" },
  {
    value: "Indian Ocean Territory",
    text: "Indian Ocean Territory",
    key: "io",
    flag: "io"
  },
  { value: "Indonesia", text: "Indonesia", key: "id", flag: "id" },
  { value: "Iran", text: "Iran", key: "ir", flag: "ir" },
  { value: "Iraq", text: "Iraq", key: "iq", flag: "iq" },
  { value: "Ireland", text: "Ireland", key: "ie", flag: "ie" },
  { value: "Israel", text: "Israel", key: "il", flag: "il" },
  { value: "Italy", text: "Italy", key: "it", flag: "it" },
  { value: "Jamaica", text: "Jamaica", key: "jm", flag: "jm" },
  {
    value: "Jan Mayen",
    text: "Jan Mayen",
    key: "sj",
    flag: "sj",
    alias: "Svalbard"
  },
  { value: "Japan", text: "Japan", key: "jp", flag: "jp" },
  { value: "Jordan", text: "Jordan", key: "jo", flag: "jo" },
  { value: "Kazakhstan", text: "Kazakhstan", key: "kz", flag: "kz" },
  { value: "Kenya", text: "Kenya", key: "ke", flag: "ke" },
  { value: "Kiribati", text: "Kiribati", key: "ki", flag: "ki" },
  { value: "Kuwait", text: "Kuwait", key: "kw", flag: "kw" },
  { value: "Kyrgyzstan", text: "Kyrgyzstan", key: "kg", flag: "kg" },
  { value: "Laos", text: "Laos", key: "la", flag: "la" },
  { value: "Latvia", text: "Latvia", key: "lv", flag: "lv" },
  { value: "Lebanon", text: "Lebanon", key: "lb", flag: "lb" },
  { value: "Lesotho", text: "Lesotho", key: "ls", flag: "ls" },
  { value: "Liberia", text: "Liberia", key: "lr", flag: "lr" },
  { value: "Libya", text: "Libya", key: "ly", flag: "ly" },
  { value: "Liechtenstein", text: "Liechtenstein", key: "li", flag: "li" },
  { value: "Lithuania", text: "Lithuania", key: "lt", flag: "lt" },
  { value: "Luxembourg", text: "Luxembourg", key: "lu", flag: "lu" },
  { value: "Macau", text: "Macau", key: "mo", flag: "mo" },
  { value: "Macedonia", text: "Macedonia", key: "mk", flag: "mk" },
  { value: "Madagascar", text: "Madagascar", key: "mg", flag: "mg" },
  { value: "Malawi", text: "Malawi", key: "mw", flag: "mw" },
  { value: "Malaysia", text: "Malaysia", key: "my", flag: "my" },
  { value: "Maldives", text: "Maldives", key: "mv", flag: "mv" },
  { value: "Mali", text: "Mali", key: "ml", flag: "ml" },
  { value: "Malta", text: "Malta", key: "mt", flag: "mt" },
  {
    value: "Marshall Islands",
    text: "Marshall Islands",
    key: "mh",
    flag: "mh"
  },
  { value: "Martinique", text: "Martinique", key: "mq", flag: "mq" },
  { value: "Mauritania", text: "Mauritania", key: "mr", flag: "mr" },
  { value: "Mauritius", text: "Mauritius", key: "mu", flag: "mu" },
  { value: "Mayotte", text: "Mayotte", key: "yt", flag: "yt" },
  { value: "Mexico", text: "Mexico", key: "mx", flag: "mx" },
  { value: "Micronesia", text: "Micronesia", key: "fm", flag: "fm" },
  { value: "Moldova", text: "Moldova", key: "md", flag: "md" },
  { value: "Monaco", text: "Monaco", key: "mc", flag: "mc" },
  { value: "Mongolia", text: "Mongolia", key: "mn", flag: "mn" },
  { value: "Montenegro", text: "Montenegro", key: "me", flag: "me" },
  { value: "Montserrat", text: "Montserrat", key: "ms", flag: "ms" },
  { value: "Morocco", text: "Morocco", key: "ma", flag: "ma" },
  { value: "Mozambique", text: "Mozambique", key: "mz", flag: "mz" },
  { value: "Namibia", text: "Namibia", key: "na", flag: "na" },
  { value: "Nauru", text: "Nauru", key: "nr", flag: "nr" },
  { value: "Nepal", text: "Nepal", key: "np", flag: "np" },
  { value: "Netherlands", text: "Netherlands", key: "nl", flag: "nl" },
  {
    value: "Netherlandsantilles",
    text: "Netherlandsantilles",
    key: "an",
    flag: "an"
  },
  { value: "New Caledonia", text: "New Caledonia", key: "nc", flag: "nc" },
  { value: "New Guinea", text: "New Guinea", key: "pg", flag: "pg" },
  { value: "New Zealand", text: "New Zealand", key: "nz", flag: "nz" },
  { value: "Nicaragua", text: "Nicaragua", key: "ni", flag: "ni" },
  { value: "Niger", text: "Niger", key: "ne", flag: "ne" },
  { value: "Nigeria", text: "Nigeria", key: "ng", flag: "ng" },
  { value: "Niue", text: "Niue", key: "nu", flag: "nu" },
  { value: "Norfolk Island", text: "Norfolk Island", key: "nf", flag: "nf" },
  { value: "North Korea", text: "North Korea", key: "kp", flag: "kp" },
  {
    value: "Northern Mariana Islands",
    text: "Northern Mariana Islands",
    key: "mp",
    flag: "mp"
  },
  { value: "Norway", text: "Norway", key: "no", flag: "no" },
  { value: "Oman", text: "Oman", key: "om", flag: "om" },
  { value: "Pakistan", text: "Pakistan", key: "pk", flag: "pk" },
  { value: "Palau", text: "Palau", key: "pw", flag: "pw" },
  { value: "Palestine", text: "Palestine", key: "ps", flag: "ps" },
  { value: "Panama", text: "Panama", key: "pa", flag: "pa" },
  { value: "Paraguay", text: "Paraguay", key: "py", flag: "py" },
  { value: "Peru", text: "Peru", key: "pe", flag: "pe" },
  { value: "Philippines", text: "Philippines", key: "ph", flag: "ph" },
  {
    value: "Pitcairn Islands",
    text: "Pitcairn Islands",
    key: "pn",
    flag: "pn"
  },
  { value: "Poland", text: "Poland", key: "pl", flag: "pl" },
  { value: "Portugal", text: "Portugal", key: "pt", flag: "pt" },
  { value: "Puerto Rico", text: "Puerto Rico", key: "pr", flag: "pr" },
  { value: "Qatar", text: "Qatar", key: "qa", flag: "qa" },
  { value: "Reunion", text: "Reunion", key: "re", flag: "re" },
  { value: "Romania", text: "Romania", key: "ro", flag: "ro" },
  { value: "Russia", text: "Russia", key: "ru", flag: "ru" },
  { value: "Rwanda", text: "Rwanda", key: "rw", flag: "rw" },
  { value: "Saint Helena", text: "Saint Helena", key: "sh", flag: "sh" },
  {
    value: "Saint Kitts and Nevis",
    text: "Saint Kitts and Nevis",
    key: "kn",
    flag: "kn"
  },
  { value: "Saint Lucia", text: "Saint Lucia", key: "lc", flag: "lc" },
  { value: "Saint Pierre", text: "Saint Pierre", key: "pm", flag: "pm" },
  { value: "Saint Vincent", text: "Saint Vincent", key: "vc", flag: "vc" },
  { value: "Samoa", text: "Samoa", key: "ws", flag: "ws" },
  { value: "San Marino", text: "San Marino", key: "sm", flag: "sm" },
  {
    value: "Sandwich Islands",
    text: "Sandwich Islands",
    key: "gs",
    flag: "gs"
  },
  { value: "Sao Tome", text: "Sao Tome", key: "st", flag: "st" },
  { value: "Saudi Arabia", text: "Saudi Arabia", key: "sa", flag: "sa" },
  { value: "Scotland", text: "Scotland", key: "gbsct", flag: "gb sct" },
  { value: "Senegal", text: "Senegal", key: "sn", flag: "sn" },
  { value: "Serbia", text: "Serbia", key: "cs", flag: "cs" },
  { value: "Serbia", text: "Serbia", key: "rs", flag: "rs" },
  { value: "Seychelles", text: "Seychelles", key: "sc", flag: "sc" },
  { value: "Sierra Leone", text: "Sierra Leone", key: "sl", flag: "sl" },
  { value: "Singapore", text: "Singapore", key: "sg", flag: "sg" },
  { value: "Slovakia", text: "Slovakia", key: "sk", flag: "sk" },
  { value: "Slovenia", text: "Slovenia", key: "si", flag: "si" },
  { value: "Solomon Islands", text: "Solomon Islands", key: "sb", flag: "sb" },
  { value: "Somalia", text: "Somalia", key: "so", flag: "so" },
  { value: "South Africa", text: "South Africa", key: "za", flag: "za" },
  { value: "S. Korea", text: "S. Korea", key: "kr", flag: "kr" },
  { value: "Spain", text: "Spain", key: "es", flag: "es" },
  { value: "Sri Lanka", text: "Sri Lanka", key: "lk", flag: "lk" },
  { value: "Sudan", text: "Sudan", key: "sd", flag: "sd" },
  { value: "Suritext", text: "Suritext", key: "sr", flag: "sr" },
  { value: "Swaziland", text: "Swaziland", key: "sz", flag: "sz" },
  { value: "Sweden", text: "Sweden", key: "se", flag: "se" },
  { value: "Switzerland", text: "Switzerland", key: "ch", flag: "ch" },
  { value: "Syria", text: "Syria", key: "sy", flag: "sy" },
  { value: "Taiwan", text: "Taiwan", key: "tw", flag: "tw" },
  { value: "Tajikistan", text: "Tajikistan", key: "tj", flag: "tj" },
  { value: "Tanzania", text: "Tanzania", key: "tz", flag: "tz" },
  { value: "Thailand", text: "Thailand", key: "th", flag: "th" },
  { value: "Timorleste", text: "Timorleste", key: "tl", flag: "tl" },
  { value: "Togo", text: "Togo", key: "tg", flag: "tg" },
  { value: "Tokelau", text: "Tokelau", key: "tk", flag: "tk" },
  { value: "Tonga", text: "Tonga", key: "to", flag: "to" },
  { value: "Trinidad", text: "Trinidad", key: "tt", flag: "tt" },
  { value: "Tunisia", text: "Tunisia", key: "tn", flag: "tn" },
  { value: "Turkey", text: "Turkey", key: "tr", flag: "tr" },
  { value: "Turkmenistan", text: "Turkmenistan", key: "tm", flag: "tm" },
  { value: "Tuvalu", text: "Tuvalu", key: "tv", flag: "tv" },
  {
    value: "UAE",
    text: "UAE",
    key: "ae",
    flag: "ae",
    alias: "United Arab Emirates"
  },
  { value: "Uganda", text: "Uganda", key: "ug", flag: "ug" },
  { value: "Ukraine", text: "Ukraine", key: "ua", flag: "ua" },
  {
    value: "UK",
    text: "UK",
    key: "uk",
    flag: "gb",
    alias: "uk"
  },
  {
    value: "USA",
    text: "USA",
    key: "us",
    flag: "us",
    alias: "America"
  },
  { value: "Uruguay", text: "Uruguay", key: "uy", flag: "uy" },
  {
    value: "US Minor Islands",
    text: "US Minor Islands",
    key: "um",
    flag: "um"
  },
  {
    value: "US Virgin Islands",
    text: "US Virgin Islands",
    key: "vi",
    flag: "vi"
  },
  { value: "Uzbekistan", text: "Uzbekistan", key: "uz", flag: "uz" },
  { value: "Vanuatu", text: "Vanuatu", key: "vu", flag: "vu" },
  { value: "Vatican City", text: "Vatican City", key: "va", flag: "va" },
  { value: "Venezuela", text: "Venezuela", key: "ve", flag: "ve" },
  { value: "Vietnam", text: "Vietnam", key: "vn", flag: "vn" },
  { value: "Wales", text: "Wales", key: "gbwls", flag: "gb wls" },
  {
    value: "Wallis and Futuna",
    text: "Wallis and Futuna",
    key: "wf",
    flag: "wf"
  },
  { value: "Western Sahara", text: "Western Sahara", key: "eh", flag: "eh" },
  { value: "Yemen", text: "Yemen", key: "ye", flag: "ye" },
  { value: "Zambia", text: "Zambia", key: "zm", flag: "zm" },
  { value: "Zimbabwe", text: "Zimbabwe", key: "zw", flag: "zw" }
];

class Country extends React.Component {
  renderOptions = reducedCountry => {
    return reducedCountry.map(country => {
      return (
        <option key={country.key} value={`${country.text}_${country.flag}`}>
          {country.text}
        </option>
      );
    });
  };

  handleChangeCountry = e => {
    this.props.onSelect(e.target.value);
  };

  render() {
    let reducedCountry = [];
    if (this.props.bible) {
      reducedCountry = countryOptions.filter(country => {
        return this.props.bible[country.text];
      });
    }
    if (this.props.country && reducedCountry.length) {
      return (
        <select
          className="drop-down default-color-off"
          defaultValue={this.props.country}
          onChange={this.handleChangeCountry}
        >
          {this.renderOptions(reducedCountry)}
        </select>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Country;
