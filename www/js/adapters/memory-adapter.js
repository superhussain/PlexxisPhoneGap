app.adapters.employee = (function () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var employee = null;
            var l = employees.length;
            for (var i = 0; i < l; i++) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            deferred.resolve(employee);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = employees.filter(function (element) {
                var fullName = element.firstName + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred();
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        employees = 
        [
                        {"id":  1,  "firstName": "Ahad",          "lastName": "Habibulla",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Software Developer",                                "department": "Software",             "cellPhone": "(416) 460-9964",          "officePhone": "(647) 547-1965",          "email": "ahad@plexxis.com",                "city": "",      "pic": "Ahad_Habibulla.jpg",          "twitterId": "",      "blog": ""},
                        {"id":  2,  "firstName": "Ali",           "lastName": "Abbas",          "managerId": 0, "managerName": "", "reports": 0,          "title": "Junior Software Specialist",                        "department": "Software",             "cellPhone": "(416) 454-2386",          "officePhone": "",                        "email": "ali@plexxis.com",                 "city": "",      "pic": "Ali_Abbas.jpg",               "twitterId": "",      "blog": ""},
			{"id":  3,  "firstName": "Ana",           "lastName": "Pombo",          "managerId": 0, "managerName": "", "reports": 0,          "title": "Implementations Coordinator",                       "department": "Software",             "cellPhone": "(647) 202-3547",          "officePhone": "(289) 468-5078",          "email": "ana@plexxis.com",                 "city": "",      "pic": "Ana_Pombo.jpg",               "twitterId": "",      "blog": ""},
			{"id":  4,  "firstName": "Andrew",        "lastName": "MacKenzie",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Software Developer",                                "department": "Software",             "cellPhone": "(416) 909-0139",          "officePhone": "",                        "email": "andrew@plexxis.com",              "city": "",      "pic": "Andrew_MacKenzie.jpg",        "twitterId": "",      "blog": ""},       
			{"id":  5,  "firstName": "Ashley",        "lastName": "Seecharan",      "managerId": 0, "managerName": "", "reports": 0,          "title": "Accounts Receivable & Contract Management",         "department": "Software",             "cellPhone": "(647) 456-8321",          "officePhone": "",                        "email": "ashley@plexxis.com",              "city": "",      "pic": "Ashley_Seecharan.jpg",        "twitterId": "",      "blog": ""},
			{"id":  6,  "firstName": "Chad",          "lastName": "Pearson",        "managerId": 0, "managerName": "", "reports": 0,          "title": "Business Developer",                                "department": "Software",             "cellPhone": "(416) 574-1677",          "officePhone": "(647) 547-1958",          "email": "chad@plexxis.com",                "city": "",      "pic": "Chad_Pearson.jpg",            "twitterId": "",      "blog": ""},
			{"id":  7,  "firstName": "Christopher",   "lastName": "Loranger",       "managerId": 0, "managerName": "", "reports": 0,          "title": "Chief Executive Officer",                           "department": "Software",             "cellPhone": "(416) 405-2667",          "officePhone": "(647) 547-1966",          "email": "chris@plexxis.com",               "city": "",      "pic": "Christopher_Loranger.jpg",    "twitterId": "",      "blog": ""},
			{"id":  8,  "firstName": "Eric",          "lastName": "Ferraro",        "managerId": 0, "managerName": "", "reports": 0,          "title": "IT Services Administrator",                         "department": "Tech",                 "cellPhone": "(647) 285-8605",          "officePhone": "",                        "email": "eric@plexxis.com",                "city": "",      "pic": "Eric_Ferraro.jpg",            "twitterId": "",      "blog": ""},
			{"id":  9,  "firstName": "Hussain",       "lastName": "Abbas",          "managerId": 0, "managerName": "", "reports": 0,          "title": "Cooperative Education Student",                     "department": "Tech",                 "cellPhone": "(647) 971-6786",          "officePhone": "",                        "email": "coop1@plexxis.com",               "city": "",      "pic": "Hussain_Abbas.jpg",           "twitterId": "",      "blog": ""}, 
			{"id": 10,  "firstName": "Jason",         "lastName": "Fraser",         "managerId": 0, "managerName": "", "reports": 0,          "title": "Senior Systems Designer",                           "department": "Software",             "cellPhone": "(647) 405-0210",          "officePhone": "(647) 547-1976",          "email": "jay@plexxis.com",                 "city": "",      "pic": "Jason_Fraser.jpg",            "twitterId": "",      "blog": ""}, 
			{"id": 11,  "firstName": "Jeni",          "lastName": "Mitchell",       "managerId": 0, "managerName": "", "reports": 0,          "title": "Senior Implementations Coordinator",                "department": "Software",             "cellPhone": "(647) 405-0098",          "officePhone": "(647) 547-1974",          "email": "jeni@plexxis.com",                "city": "",      "pic": "Jeni_Mitchell.jpg",           "twitterId": "",      "blog": ""},
			{"id": 12,  "firstName": "Jonathan",      "lastName": "Locke",          "managerId": 0, "managerName": "", "reports": 0,          "title": "Implementations Specialist",                        "department": "Software",             "cellPhone": "(647) 290-6736",          "officePhone": "(289) 468-5074",          "email": "jonathan@plexxis.com",            "city": "",      "pic": "Jonathan_Locke.jpg",          "twitterId": "",      "blog": ""},    
			{"id": 13,  "firstName": "Jorge",         "lastName": "Vargas",         "managerId": 0, "managerName": "", "reports": 0,          "title": "Director, IT Services",                             "department": "Tech",                 "cellPhone": "(647) 638-5627",          "officePhone": "(289) 468-5072",          "email": "jorge@plexxis.com",               "city": "",      "pic": "Jorge_Vargas.jpg",            "twitterId": "",      "blog": ""},  
			{"id": 14,  "firstName": "Joseph",        "lastName": "Morain",         "managerId": 0, "managerName": "", "reports": 0,          "title": "Software Developer",                                "department": "Software",             "cellPhone": "(647) 994-7246",          "officePhone": "",                        "email": "joseph@plexxis.com",              "city": "",      "pic": "Joseph_Morain.jpg",           "twitterId": "",      "blog": ""},   
			{"id": 15,  "firstName": "Laura",         "lastName": "Neacsu",         "managerId": 0, "managerName": "", "reports": 0,          "title": "Financial Supervisor",                              "department": "Tech",                 "cellPhone": "(416) 587-8212",          "officePhone": "(289) 468-5066",          "email": "laura@plexxis.com",               "city": "",      "pic": "Laura_Neacsu.jpg",            "twitterId": "",      "blog": ""},  
			{"id": 16,  "firstName": "Leo",           "lastName": "Soares",         "managerId": 0, "managerName": "", "reports": 0,          "title": "IT Services Administrator",                         "department": "Tech",                 "cellPhone": "(416) 845-9243",          "officePhone": "(289) 468-5070",          "email": "leo@plexxis.com",                 "city": "",      "pic": "Leo_Soares.jpg",              "twitterId": "",      "blog": ""}, 
			{"id": 17,  "firstName": "Melanie",       "lastName": "Boodhan",        "managerId": 0, "managerName": "", "reports": 0,          "title": "Customer Relations Coordinator",                    "department": "Software",             "cellPhone": "(647) 533-4117",          "officePhone": "(905) 889-8979",          "email": "melanie@plexxis.com",             "city": "",      "pic": "Melanie_Boodhan.jpg",         "twitterId": "",      "blog": ""},   
			{"id": 18,  "firstName": "Mitch",         "lastName": "Singh",          "managerId": 0, "managerName": "", "reports": 0,          "title": "Team Leader, IT Services",                          "department": "Tech",                 "cellPhone": "(647) 409-0091",          "officePhone": "(289) 468-5071",          "email": "mitch@plexxis.com",               "city": "",      "pic": "Mitch_Singh.jpg",             "twitterId": "",      "blog": ""},  
			{"id": 19,  "firstName": "Remi",          "lastName": "Loranger",       "managerId": 0, "managerName": "", "reports": 0,          "title": "Senior Systems Analyst",                            "department": "Software",             "cellPhone": "(416) 330-3405",          "officePhone": "(647) 547-1975",          "email": "remi@plexxis.com",                "city": "",      "pic": "Remi_Loranger.jpg",           "twitterId": "",      "blog": ""},  
			{"id": 20,  "firstName": "Roshan",        "lastName": "Royan",          "managerId": 0, "managerName": "", "reports": 0,          "title": "Implementations Specialist",                        "department": "Software",             "cellPhone": "(647) 338-6601",          "officePhone": "",                        "email": "roshan@plexxis.com",              "city": "",      "pic": "Roshan_Royan.jpg",            "twitterId": "",      "blog": ""},
			{"id": 21,  "firstName": "Sherif",        "lastName": "Makary",         "managerId": 0, "managerName": "", "reports": 0,          "title": "Software Developer",                                "department": "Software",             "cellPhone": "(647) 891-4490",          "officePhone": "",                        "email": "sherif@plexxis.com",              "city": "",      "pic": "Sherif_Makary.jpg",           "twitterId": "",      "blog": ""},
			{"id": 22,  "firstName": "Tim",           "lastName": "Nighbor",        "managerId": 0, "managerName": "", "reports": 0,          "title": "Implementations Specialist",                        "department": "Software",             "cellPhone": "(647) 501-6492",          "officePhone": "(416) 665-6652",          "email": "tim@plexxis.com",                 "city": "",      "pic": "Tim_Nighbor.jpg",             "twitterId": "",      "blog": ""},  
			{"id": 23,  "firstName": "Wai",           "lastName": "Tran",           "managerId": 0, "managerName": "", "reports": 0,          "title": "IT Services Administrator",                         "department": "Tech",                 "cellPhone": "(647) 409-2200",          "officePhone": "(289) 468-5073",          "email": "wai@plexxis.com",                 "city": "",      "pic": "Wai_Tran.jpg",                "twitterId": "",      "blog": ""}, 
			{"id": 24,  "firstName": "Tech",          "lastName": "Support",        "managerId": 0, "managerName": "", "reports": 0,          "title": "Plexxis Tech Support",                              "department": "Tech",                 "cellPhone": "",                        "officePhone": "",                        "email": "support@plexxis.com",             "city": "",      "pic": "Tech_Support.jpg",            "twitterId": "",      "blog": ""}, 
			{"id": 25,  "firstName": "Software",      "lastName": "Support",        "managerId": 0, "managerName": "", "reports": 0,          "title": "Plexxis Software Support",                          "department": "Software",             "cellPhone": "",                        "officePhone": "",                        "email": "softwaresupport@plexxis.com",     "city": "",      "pic": "Software_Support.jpg",        "twitterId": "",      "blog": ""},   
			{"id": 26,  "firstName": "Fax",           "lastName": "",               "managerId": 0, "managerName": "", "reports": 0,          "title": "Plexxis Fax",                                       "department": "",                     "cellPhone": "",                        "officePhone": "(905) 303-4625",          "email": "fax@plexxis.com",                 "city": "",      "pic": "Fax_.jpg",                    "twitterId": "",      "blog": ""}                                                                                                        
        ];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByManager: findByManager
    };

}());
