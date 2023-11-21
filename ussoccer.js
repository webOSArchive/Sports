Sport.ussoccer = {
    getHashTag: function() {
        return "SoccerLive"
    },
    getTitle: function() {
        return "US Soccer"
    },
    getScoresUrl: function() {
        return "http://soccernet.espn.go.com/bottomline/scores/scores?scoresSource=usa"
    },
    getGameUrl: function() {
        return "http://m.espn.go.com/soccer/gamecast?gameId="
    },
    getTabletUrl: function() {
        return "http://soccernet.espn.go.com/report?id="
    },
    getPrefix: function() {
        return "USASOC_s_"
    },
    getFavorites: function() {
        return ["NE", "COL", "LA", "HOU"]
    },
    isCollege: function() {
        return !1
    },
    isSoccer: function() {
        return !0
    },
    getTeams: function() {
        return [{
            name: "Chicago Fire",
            group: "Eastern Conference",
            value: "CHI",
            location: "Chicago",
            mascot: "Fire"
        }, {
            name: "Columbus Crew",
            group: "Eastern Conference",
            value: "CLS",
            location: "Columbus",
            mascot: "Crew"
        }, {
            name: "DC United",
            group: "Eastern Conference",
            value: "DC",
            location: "DC United",
            mascot: "United"
        }, {
            name: "New England Revolution",
            group: "Eastern Conference",
            value: "NE",
            location: "New England",
            mascot: "Revolution"
        }, {
            name: "New York Red Bulls",
            group: "Eastern Conference",
            value: "NY",
            location: "New York Red Bulls",
            mascot: "Red Bulls"
        }, {
            name: "Philadelphia Union",
            group: "Eastern Conference",
            value: "PHI",
            location: "Philadelphia Union",
            mascot: "Union"
        }, {
            name: "Sporting KC",
            group: "Eastern Conference",
            value: "KC",
            location: "Kansas City",
            mascot: "Sporting KC"
        }, {
            name: "Toronto FC",
            group: "Eastern Conference",
            value: "TOR",
            location: "Toronto FC",
            mascot: "Toronto FC"
        }, {
            name: "Chivas USA",
            group: "Western Conference",
            value: "CHV",
            location: "Chivas USA",
            mascot: "Chivas USA"
        }, {
            name: "Colorado Rapids",
            group: "Western Conference",
            value: "COL",
            location: "Colorado",
            mascot: "Rapids"
        }, {
            name: "FC Dallas",
            group: "Western Conference",
            value: "DAL",
            location: "FC Dallas",
            mascot: "FC Dallas"
        }, {
            name: "Houston Dynamo",
            group: "Western Conference",
            value: "HOU",
            location: "Houston",
            mascot: "Dynamo"
        }, {
            name: "Los Angeles Galaxy",
            group: "Western Conference",
            value: "LA",
            location: "Los Angeles",
            mascot: "Galaxy"
        }, {
            name: "Portland Timbers",
            group: "Western Conference",
            value: "POR",
            location: "Portland Timbers",
            mascot: "Timbers"
        }, {
            name: "Real Salt Lake",
            group: "Western Conference",
            value: "SL",
            location: "Real Salt Lake",
            mascot: "Real Salt Lake"
        }, {
            name: "San Jose Earthquakes",
            group: "Western Conference",
            value: "SJ",
            location: "San Jose",
            mascot: "Earthquakes"
        }, {
            name: "Seattle Sounders FC",
            group: "Western Conference",
            value: "SEA",
            location: "Seattle Sounders FC",
            mascot: "Sounders FC"
        }, {
            name: "Vancouver Whitecaps",
            group: "Western Conference",
            value: "VAN",
            location: "Vancouver Whitecaps",
            mascot: "Whitecaps"
        }]
    }
};