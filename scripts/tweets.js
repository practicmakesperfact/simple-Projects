// Global variable
 let tweetList =document.getElementById('tweet-list');

 eventListener();
// events
 function eventListener()
  {
    document.querySelector('#form').addEventListener('submit',newTweet);

    // events for remove btn
    tweetList.addEventListener('click', removeTweet);

    // document
    document.addEventListener('DOMContentLoaded' , localStorageOnLoad)
    }

// function
function newTweet(e){
  e.preventDefault();
  //  read the textarea
 let tweet = document.querySelector('#tweet').value;
//  create remove a
let removeBtn = document.createElement('a');
removeBtn.classList = 'remove-btn';

    //  create  an li element
  let list= document.createElement('li');
     list.textContent = tweet;
    //  add remove btn
    removeBtn.textContent = 'X';
    list.appendChild(removeBtn);
    tweetList.appendChild(list);

    addTweetLocalStorage(tweet);

    // add the alert 
    alert('Tweet Added');
    this.reset();
}

function removeTweet(e){
if(e.target.classList.contains('remove-btn')){
  e.target.parentElement.remove();
}
   removeTweetLocalStorage(e.target.parentElement.textContent);
}

function addTweetLocalStorage(tweet){

  let tweets =getTweetFromLocalStorage();
  // add the tweet into the array
   tweets.push(tweet);
  //  convert the tweet array to string 

 localStorage.setItem('tweets', JSON.stringify(tweets));

}

function getTweetFromLocalStorage(){
  let tweets;
  // get the value, if null is returned then we create an empty array 
  let tweetsLS = localStorage.getItem('tweets');

  if(tweetsLS===null){
    tweets = [];
  }else {
    tweets = JSON.parse(tweetsLS);
  }

  return tweets;

}

function localStorageOnLoad(){
  let tweets = getTweetFromLocalStorage();
  tweets.forEach( (tweet) =>{
    let removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-btn';
    
        //  create  an li element
      let list= document.createElement('li');
         list.textContent = tweet;
        //  add remove btn
        removeBtn.textContent = 'X';
        list.appendChild(removeBtn);
        tweetList.appendChild(list);
  });

}

function removeTweetLocalStorage(tweet){
// get tweets from storage 
  let tweets = getTweetFromLocalStorage();

  //  remove x from the tweet 
  let tweetDelete = tweet.substring(0, tweet.length-1);

  //  loop throught the tweets and remove the tweet that is equal. 
  tweets.forEach( (tweetLs,index) =>{
    if(tweetDelete === tweetLs){
    tweets.splice(index, 1);
    }
  });
  // save the data
  localStorage.setItem('tweets', JSON.stringify(tweets));

}




