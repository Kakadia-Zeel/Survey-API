# Survey-API
```
1) POST /api/auth/login
body : 
{
    "username" : "Zeel Kakadia",
    "password" : "zk123456777766"
}
This will add username and password into User Table if it doesn't exist. And it will return JSON Web Token in header.

2) POST : /api/survey/create
body : {
    "surveyname" : "Survey 1"
}
If user is verified by JSON Web Token then survey is added into Survey Table with user id and survey name provided by user.

3) POST : /api/survey/add/:surveyId
body : {
    "question" : "Can You sing ?"
}

If user is verified, question is added into Question Table along with survey id from params. As a response, all question related to survey 
are send as response.

4) GET : /api/survey/takesurvey/:surveyId

If user is verified, all questions realated to given survey id is send as response.

5) POST : /api/survey/ans/:surveyId
body : {
    "data" : [
        {
         "questionId":1,
         "ans":"true"
        
        },
         {
          "questionId":2,
         "ans":"true"
        
        }
    ]
}

As answer can be Yes/No or True/False, we to add all answers with question id in array along with ans. If ans is true, then count of YES will 
be incremented by 1. If ans is false, count of NO will be incremented by 1.
This can be done by only verified user.

6) GET : /api/survey/viewResults/:surveyId

It will return all question along with YES and NO votes from given survey id.

7) POST : /api/image/resize
body : {
    "url":"https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
}

Here, I will fetch image with the help of Axios and storing it into arrayBuffer. Then with the sharp package, I am resizing image into
50x50. And returning it as Response by setting header as 'image/png'


```

# Database : 
```
I have created 3 Tables : 1) User , 2) Survey and 3)Question

User Table : 
	userid (auto increment) - PK,
	username,
	password,

Survey Table : 
	surveyid (auto increment) - PK,
	ownerid references userid from user table - FK,
	surveyname unique,

Question Table : 
	questionid(auto increment) - PK,
	surveyid references surveyid from survey table - FK,
	ques_details,
	yes int,
	no int
```
