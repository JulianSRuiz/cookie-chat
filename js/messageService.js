angular.module('chatroom').service('messageService', function($http){


  var baseUrl = 'http://practiceapi.devmounta.in/api/chats';

  //Here you'll need to create two methods. One called postMessage and the other called getMessages.

  //On the lines below create a getMessages method. This method will retrieve data from the backend.
  //The url for the get request should be 'http://practiceapi.devmounta.in/api/chats'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.

  //On the line below create the postMessage method. This method will add data to the backend server.
  //The url for the request needs to be 'http://practiceapi.devmounta.in/api/chats'
  //Because we're making a POST request, we need a way to tell the server the data we want to give it,
    //in your $http call (along with url and method) have a data property which has a value that is equal to another object which a key of message and a value of the message being passed to parse. IE data: {message: yourMessage}
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.

  //postMessage method here
    this.postMessage = function(post) {
      return $http({
        method: 'POST',
        url: baseUrl,
        data: {message:post,
            person: 'Julian'}
      })
      .then(function(response) {

      });
    }

  //getMessages method here

    this.getMessages = function() {
      return $http.get(baseUrl)
      .then(function(response) {
        console.log(response)
        return response.data.reverse();
      })
    };



});


// [{"message":"Test","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:23:30.034Z"},
// {"message":"Test","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:23:57.012Z"},
// {"message":"Does it work?","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:24:12.618Z"},
// {"message":"How you doin.","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:38:12.534Z"},
// {"message":"And then...","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:38:43.834Z"},
// {"message":"And then...","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:39:23.559Z"},
// {"message":"Can anyone else see this?","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:40:49.274Z"},
// {"message":"Test","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:41:26.149Z"},
// {"message":"Test","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:42:34.633Z"},
// {"message":"asdfasdf","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:44:21.625Z"},
// {"message":"Hello","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:45:02.777Z"},
// {"message":"Woah it's working!","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:45:45.127Z"},
// {"message":"Look behind you.","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:46:07.789Z"},
// {"message":"Working?","cookie":"Great Butter Cookie","createdAt":"2016-09-07T18:47:08.724Z"}]
