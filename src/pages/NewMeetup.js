import {useNavigate, ususeNavigate} from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm"

const NewMeetup = () => {
  const navigate = useNavigate(); 
  const meetupHandler = (meetupData) => {
    fetch('https://react-project3-16c7c-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-type': 'application/json',
      } 
    }).then(() => {
      navigate('/');
    });
   }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup ={meetupHandler} />
    </section>
  )
}

export default NewMeetup