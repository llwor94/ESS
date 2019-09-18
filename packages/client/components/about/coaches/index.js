import React, {useState} from 'react'
import styles from './styles.scss'

const coaches = [
  {name: 'Lisa', bio: 'Lisa has has been teaching swim lessons for over 35 years and competing and coaching triathlons of all distances for 25 years . She learned to swim at a young age, competed thru the collegiate level and has continued swimming competitively thru her adult life.\n' +
      '\n' +
      'Lisa grew up with a passion for the water and teaching others how to swim. She love to teach the new beginner and watch them advance and learn to love the water.', img: 'https://www.eastsideswimschool.com/assets/lisa1.jpg'},
  {name: 'Tiffani', bio: 'I am a married mother of two teenage boys, and in my spare time I volunteer at Paws Wildlife as a rehabber. I am a member of WASART animal rescue team and help with ASPCA field investigation rescue team. My love for the water and swimming started at an early age, Growing up in Southern California provided me the opportunity to learn and compete with some of the best SoCal swimmers.\n' +
      '\n' +
      'That same passion that drove me to be an extremely accomplished swimmer has been transformed into my love for teaching children. With my 25 years of teaching I have learned to make it fun and to teach your kids life saving skills. Like anything the more you practice the more familiar swimming will become. My goal is to ensure everyone knows how to swim and be safe around the water.', img: 'https://www.eastsideswimschool.com/assets/tiffani.jpeg'},
  {name: 'Allison', bio: 'Growing up in California Allison was always in the water. She started competitive swimming when she was 5 and hasn’t stopped. Getting an athletic scholarship to swim at SDSU she swam throughout college and dove right into masters swimming once her college days were over.\n' +
      '\n' +
      'Allison started teaching swim lessons when she was 14 in her parents backyard and has loved being able to teach such an important life skill! Coaching all different levels of competitive swimming, she loves teaching the ones who are new or unfamiliar to the water and watching them grow in the pool and as a swimmer. “My goal is to get you or your little one water safe and comfortable in and around water while having fun! Nobody should be afraid of the pool.”', img: 'https://www.eastsideswimschool.com/assets/allison.jpg'},
  {name: 'Carrie', bio: 'Born in Hawaii, Carrie’s love for the water started very early. At age 5, she started competitive swimming and continued all through her childhood. Carrie began teaching swim lessons at age 15, at both private and public pools, and continued to teach swimming through college.\n' +
      '\n' +
      'Her passion for the water continued into her career, getting a Master of Marine Biology, followed by work at NOAA, The Nature Conservatory, and the University of Washington.\n' +
      '\n' +
      'In addition to teaching swim, Carrie currently runs her own business, Fiddlehead Creations, who’s aim is to inspire and promote nature conservation.\n' +
      '\n', img: 'https://www.eastsideswimschool.com/assets/img_4824.jpeg'},
  {name: 'Lori', bio: 'Being in the water was year round for me as I was born and raised in Southern California. I grew up with a pool in my back yard and the beach just a short drive away, so swimming filled many of my days. I took up the sport of Triathlon in college which led to a love of cycling and all things outdoors. I have been blessed to be a stay at home mom for the past 19 years, raising up our two children. I love working with children and young adults and look forward to teaching your children! Lisa has has been teaching swim lessons for over 35 years and competing and coaching triathlons of all distances for 25 years . She learned to swim at a young age, competed thru the collegiate level and has continued swimming competitively thru her adult life.\n' +
      '\n', img: 'https://www.eastsideswimschool.com/assets/lori1.jpg'},
  {name: 'Ariel', img: 'https://www.eastsideswimschool.com/assets/ariel.jpg'}
].map(coach => {
  coach.key = `coach-${coach.name}`;
  return coach;
});

const Coaches = () => {
  const [selectedCoach, setSelectedCoach] = useState();
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerwrapper}>
      {coaches.map(coach => <div className={styles.thumbnail} key={coach.key}><img className={`${styles.img} ${(selectedCoach && selectedCoach.name === coach.name) && styles.selected}`} src={coach.img} alt={coach.name} onClick={() => setSelectedCoach(coach)} /></div>)}
      </div>
      {Boolean(selectedCoach) && <Coach coach={selectedCoach}/>}
    </div>
  )
}

const Coach = ({coach}) => (
  <div style={{border: '6px solid gray', padding: '10px'}} className={styles.innerwrapper}>
    <h2>{coach.name}</h2>
    <p>{coach.bio}</p>
  </div>
)

export {Coaches}

