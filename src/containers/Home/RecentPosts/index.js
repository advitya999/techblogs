import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import 'bootstrap/dist/css/bootstrap.css';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
    
   
    
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div style={{textAlign:'left', background:'#e2eef0',margin:'20px' }} > <h1>Blog Category:</h1><ul><li>Fitness</li><button onClick >Visit</button><li>Education</li><button>Visit</button><li>Travel</li><button>Visit</button><li>Healthy Eating</li><button>Visit</button><li>Hygiene</li><button >Visit</button></ul></div>
            
            <div><h3>Recent Blog</h3></div>

            <div className="postImageWrapper">
            
                <img src={require('../../../blogPostImages/corona.png')} alt="workout"/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>PANDEMIC AND DIGITAL LEARNING</h2>
                <span>posted on June 21, 2020 </span>
                <p><br></br>Pandemics are large scale outbreaks of infectious disease.
Basically COVID-19 pandemic is defining the global health crisis of our time and the greatest challenge we have faced since World War Two. 
As the World Health Organization has confirmed COVID-19 is an infectious disease, after sudden acute respiratory syndrome and Middle East Respiratory Syndrome, it is the third acute infectious disease caused by Coronavirus infectious disease in this century.<br></br><br></br>
<b>Effects:</b><br></br> 
COVID-19 pandemic has affected thousands of people, even some of them are being killed due to the spread of this disease. It has affected our day to day life and is slowing down the global economy.
Socially, a lot of effects are there.<br></br>
⦁	Service sectors are not being able to provide the proper service.<br></br>
⦁	Cancellation and postponement of several tournaments.<br></br>
⦁	Avoid traveling.<br></br>
⦁	Disruption of celebration.<br></br>
⦁	Undue stress among the population.<br></br>
⦁	Social distancing with our peers and family members etc.<br></br>
<img src={require('../../../blogPostImages/lockdown.png')}/>
 <br></br>
#lockdowneffects<br></br>
WHAT ABOUT LEARNING? <br></br>
<b>LEARNING IN LOCKDOWN !!!</b>  <br></br>
<img src ={require('../../../blogPostImages/elearning.png')}/>
<br></br>
<b>This COVID-19 pandemic affects education a lot.</b> <br></br>
 <img src ={require('../../../blogPostImages/school.png')}/>
<br></br>Our current way of life doesn’t work. Education is one such critical area where the need for change has become evident.
The effects of coronavirus have upended the life of students, teachers as well as parents.
A change in the purpose of learning is the only possible scope for the evolution of schools and colleges.
We are the residents of the future and we require skills like resilience, adaptability, collaboration, communication, empathy, creativity, and emotional intelligence.
<br></br>
LEARNING is the acquisition of knowledge and we have to utilize some innovative methods of education which are the desire need to brighten the future.
<br></br><br></br>
<b>Instead of being taught, can students be given an experience that influences their learning???</b><br></br>
<br></br>
With the implementation of technology, approaches like integrated learning and experiential learning will power the education system.
 <br></br>
 <img src={require('../../../blogPostImages/laptop.png')}/>
<br></br>
⦁	A major factor that frames student life is a quite set routine comprising a school, homework, coaching classes, co-curricular activities, and a lot of entertainment. But this routine has completely been disrupted, the boundaries are merged.
⦁	The online environment offers various opportunities for people who would have limited access to education as well as a new paradigm for educators.
<br></br>
As we know at the end of 2019, COVID-19 spread around the world. 
Distance teaching became the only choice to continue teaching and learning globally.
Digital learning can be a solution to all of these challenges, both in routine teaching and learning, and during the time of the pandemic.
<br></br>
RESOURCES FOR YOU!!!<br></br>
We know health and safety is the first priority right now. 
As various resources are there for you to provide a number of free courses including lots of videos, lots of quizzes, one to one mentorships and several benefits are there.
We all are familiar with COURSERA, BYJUS, VEDANTU, and many more which gives you all the facilities for your learning.
Be it a school kid, undergraduate, graduate or any competitive exam aspirant, everyone is using various websites as well as apps.
Nowadays, startups in the Ed-Tech sector cannot be ignored. College students as well as competitive exam aspirants take advantage of all these startups and can easily improve their skills. 
 <br></br>
<br></br>
<img src={require('../../../blogPostImages/tech.png')}/>
<br></br>Similarly, TechTable is an EdTech Startup which aims to connect engineers to opportunities.
These types of startups are conducting webinars and many online free mentorship programs to give hands-on experience. 
In this pandemic, it is very difficult for the students who are going for internships. So, here these startups are helping students by providing internships.
<br></br><br></br>
<b>ADVANTAGES:</b><br></br>
There are several advantages of digital learning.<br></br>
⦁	It is easily accessible as it requires only an internet connection with good speed and a computer or mobile. The online sessions can be even recorded easily for later use.<br></br>
⦁	It’s totally budget-friendly because there are several courses available for free access.<br></br>
⦁	It is convenient to fit into your daily routine. Students can learn at his or her own pace and time, it means there are much less pressure and intensity.<br></br>
⦁	It can be personalized according to your needs. This aspect can generate more interest for students towards learning and it is available 24/7.<br></br>
⦁	Most importantly, social distancing can be exercised. <br></br>
<br></br>
<b>RELATIONSHIP WITH TECHNOLOGY</b><br></br>
<img src ={require('../../../blogPostImages/digitallife.png')}/>
 <br></br>

In the face of a crippling pandemic, technology has served as a major lifesaver. Communication is a major key to our interconnected existence and technology is the driving force that maintains our connections. The future of education will find no room to ignore the utilization of technology since it may very well be the best platform to empower learning in an age that is integrating technology as a way of life.
<br></br>
We know everything in this world has pros as well as cons.
<br></br>
How will we ask students to go back to a way of life that compromises their physiological, emotional, and mental health? <br></br>
Will we still ask students to get up to attend school at a time when their brains aren’t suitably active?<br></br>
<br></br>
However, In today’s world, self-discipline is the basic need because the responsibility to complete the work on time is entirely upon the people. Lack of personal connections and social interactions from our family members and from our peers, personal development may also be affected.<br></br>
We live in an ever-changing world that is ripe with new possibilities. During this unexpected crisis of fighting against the coronavirus, there need not be a compromise on health or the future of students.<br></br>
</p>

                 
                
                
                
                
            </div>

            


        </Card>
        
        
      
    </div>
   )

 }

export default RecentPosts