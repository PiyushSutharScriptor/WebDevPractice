import React from 'react'
import Card from './Card';

const PropsCard = () => {

    const users = [
  {
    image: "https://picsum.photos/seed/tech1/300/300",
    name: "Piyush",
    role: "Software Engineer",
    followers: "10k",
    following: "1k",
    pay: 23,
    company: "Amazon"
  },
  {
    image: "https://picsum.photos/seed/tech2/300/300",
    name: "Rahul",
    role: "Software Tester",
    followers: "120k",
    following: "2k",
    pay: 34,
    company: "Flipkart"
  },
  {
    image: "https://picsum.photos/seed/tech3/300/300",
    name: "Ankit",
    role: "Frontend Developer",
    followers: "45k",
    following: "1.5k",
    pay: 56,
    company: "Myntra"
  },
  {
    image: "https://picsum.photos/seed/tech4/300/300",
    name: "Suman",
    role: "Backend Developer",
    followers: "80k",
    following: "900",
    pay: 48,
    company: "Google"
  },
  {
    image: "https://picsum.photos/seed/tech5/300/300",
    name: "Rohit",
    role: "Cloud Architect",
    followers: "12k",
    following: "600",
    pay: 52,
    company: "Microsoft"
  },
  {
    image: "https://picsum.photos/seed/tech6/300/300",
    name: "Neha",
    role: "AI Engineer",
    followers: "150k",
    following: "3k",
    pay: 60,
    company: "OpenAI"
  },
  {
    image: "https://picsum.photos/seed/tech7/300/300",
    name: "Amit",
    role: "DevOps Engineer",
    followers: "33k",
    following: "2.3k",
    pay: 41,
    company: "Zoho"
  },
  {
    image: "https://picsum.photos/seed/tech8/300/300",
    name: "Karan",
    role: "Data Scientist",
    followers: "200k",
    following: "4k",
    pay: 70,
    company: "IBM"
  },
  {
    image: "https://picsum.photos/seed/tech9/300/300",
    name: "Meera",
    role: "UI/UX Designer",
    followers: "65k",
    following: "1.1k",
    pay: 38,
    company: "Adobe"
  },
  {
    image: "https://picsum.photos/seed/tech10/300/300",
    name: "Sarthak",
    role: "Mobile App Developer",
    followers: "22k",
    following: "750",
    pay: 29,
    company: "Byju's"
  },
  {
    image: "https://picsum.photos/seed/tech11/300/300",
    name: "Vikas",
    role: "Cybersecurity Analyst",
    followers: "90k",
    following: "1.7k",
    pay: 55,
    company: "Cisco"
  },
  {
    image: "https://picsum.photos/seed/tech12/300/300",
    name: "Tanya",
    role: "Full Stack Developer",
    followers: "140k",
    following: "2.2k",
    pay: 62,
    company: "Infosys"
  }
];

  return (
    <>

    {users.map((obj,idx)=>{
        return <div key={idx}>
            <Card  name={obj.name} image={obj.image} role={obj.role}
          followers={obj.followers} following={obj.following} pay={obj.pay} company={obj.company}
        />
        </div>
    })}

    </>
  )
}

export default PropsCard
