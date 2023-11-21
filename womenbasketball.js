Sport.womenbasketball = {
    getHashTag: function() {
        return "BasketballLive"
    },
    getTitle: function() {
        return "Women's Basketball"
    },
    getScoresUrl: function() {
        return "http://sports.espn.go.com/wnba/bottomline/scores"
    },
    getGameUrl: function() {
        return "http://m.espn.go.com/wnba/gamecast?gameId="
    },
    getTabletUrl: function() {
        return "http://scores.espn.go.com/wnba/playbyplay?gameId="
    },
    getPrefix: function() {
        return "wnba_s_"
    },
    getFavorites: function() {
        return ["IND", "NY", "PHO", "LA"]
    },
    isCollege: function() {
        return !1
    },
    isSoccer: function() {
        return !1
    },
    getTeams: function() {
        return [{
                name: "Atlanta Dream",
                group: "Eastern Conference",
                value: "ATL",
                location: "Atlanta",
                mascot: "Dream"
            }, {
                name: "Chicago Sky",
                group: "Eastern Conference",
                value: "CHI",
                location: "Chicago",
                mascot: "Sky"
            }, {
                name: "Connecticut Sun",
                group: "Eastern Conference",
                value: "CON",
                location: "Connecticut",
                mascot: "Sun"
            }, {
                name: "Indiana Fever",
                group: "Eastern Conference",
                value: "IND",
                location: "Indiana",
                mascot: "Fever"
            }, {
                name: "New York Liberty",
                group: "Eastern Conference",
                value: "NY",
                location: "New York",
                mascot: "Liberty"
            },
            {
                name: "Washington Mystics",
                group: "Eastern Conference",
                value: "WAS",
                location: "Washington",
                mascot: "Mystics"
            }, {
                name: "Los Angeles Sparks",
                group: "Western Conference",
                value: "LA",
                location: "LA Sparks",
                mascot: "Sparks"
            }, {
                name: "Minnesota Lynx",
                group: "Western Conference",
                value: "MIN",
                location: "Minnesota",
                mascot: "Lynx"
            }, {
                name: "Phoenix Mercury",
                group: "Western Conference",
                value: "PHO",
                location: "Phoenix",
                mascot: "Mercury"
            }, {
                name: "San Antonio Silver Stars",
                group: "Western Conference",
                value: "SA",
                location: "San Antonio",
                mascot: "Silver Stars"
            }, {
                name: "Seattle Storm",
                group: "Western Conference",
                value: "SEA",
                location: "Seattle",
                mascot: "Storm"
            }, {
                name: "Tulsa Shock",
                group: "Western Conference",
                value: "TUL",
                location: "Tulsa",
                mascot: "Shock"
            }
        ]
    }
};