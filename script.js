// // const fetchData = (): any => {
// //   console.log("fetchingData is fixed....");
// // };
var caculate = function (_a) {
    var num1 = _a.num1, num2 = _a.num2, users = _a.users, fetchData = _a.fetchData;
    if (num2) {
        return num1 * num2;
    }
    else {
        for (var i = 0; i < users.length; i++) {
            console.log(users[i]);
        }
        fetchData("I love nyi ");
        return num1;
    }
};
console.log(caculate({
    num1: 10,
    users: [
        { name: "Myat Phone Paing", age: 20, email: "paipai@gmail.com" },
        { name: "Papi", age: 21, email: "papi@gmail.com" },
        { name: "paing", age: 32, email: "paing@gmail.com" },
    ],
    fetchData: function (url) {
        console.log(url);
    },
}));
