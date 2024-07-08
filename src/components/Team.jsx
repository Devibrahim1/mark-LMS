import React from 'react'

 const people = [
  {
  
    role: '“Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla.”',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: '“Ut morbi felis, felis massa quam sit massa, amet, bibendum pulvinar elit in adipiscing amet imperdiet ac felis congue enim, elementum orci.”',
    imageUrl:
     'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Tom Cook',
    role: '“Donec in varius facilisis justo, curabitur aliquet sit justo sed sit interdum diam dolor ornare quis a felis adipiscing hendrerit quisque enim.”',
    imageUrl:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Emma Dorsey',
    role: '“Pulvinar dui vitae enim, diam et nulla elit nam leo lacinia et, a, pulvinar gravida enim in blandit mauris vitae volutpat urna, sed justo hendrerit.”',
    imageUrl:
    'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
//   {
//     name: 'Dries Vincent',
//     role: 'Business Relations',
//     imageUrl:
//     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//   },
//   {
//     name: 'Alicia Bell',
//     role: '“Pulvinar dui vitae enim, diam et nulla elit nam leo lacinia et, a, pulvinar gravida enim in blandit mauris vitae volutpat urna, sed justo hendrerit.”',
//     imageUrl:
//       'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//   },
 
]

export default function Example() {
  return (

    <div className='w-full py-8 md:py-20 px-2 '>

    <div className="bg-white max-w-[1240px] mx-auto ">
          <div className="grid md:grid-cols-2 mb-12">
            <div>
            <p className='text-yellow-500 mx-6 text-sm py-5 px-2 font-bold'>TESTIMONIALS</p>
          <h2 className="text-3xl font-bold mx-7 mb-5 text-gray-900 md:leading-snug  md:text-5xl">Trusted by Thousand of Students and Tutors</h2>
          </div>
          <div className=' ml-8 mt-3 md:text-right md:pt-24'>
          <button type="button" class=" px-5  text-blue-400 hover:bg-yellow-400 hover:outline-yellow-400 hover:text-black  focus:ring-yellow-300 text-md font-bold rounded-full py-2 mb-5 outline outline-blue-400 ">Start Learning</button> 
        </div>
        </div>
   


        <ul role="list" className="grid mx-5 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (

<div className= ''>
            <li key={person.name}>
              <div className="flex items-center gap-x-6 relative">
                <img className="h-24 w-24 rounded-xl shadow-md absolute top-10 mx-8" src={person.imageUrl} alt="image" />
                <div>

<div className='bg-white shadow-lg rounded-xl w-50'>
                  <h3 className="text-lg md:text-xl font-semibold leading-7 tracking-tight text-black-900 mt-20 pt-20 px-5">{person.role}</h3>
                  <p className="text-md font-semibold leading-6 text-indigo-600 px-10 pt-4 pb-10">{person.name}</p>

                  </div>
                </div>
                
              </div>
            </li>
            </div>
          ))}
        </ul>
        </div>
      {/* </div> */}
    {/* </div> */}
    </div>
  
  )
}


