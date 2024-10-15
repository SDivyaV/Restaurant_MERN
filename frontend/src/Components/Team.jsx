import React from 'react'
import { data } from '../restApi.json'

const Team = () => {
  return (
    <section className='team' id='team'>
        <div className='container'>
            <div className='heading_section'>
                <h1 className='heading'>OUR TEAM</h1>
                <p>The team at One8 is a passionate group of culinary 
                experts and service professionals dedicated to making 
                every guest feel welcome and every meal exceptional.</p>
            </div>
            <div className='team_container'>
                {
                    data[0].team.map((element) => (
                        <div className='card' key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h3>{element.name}</h3>
                            <p>{element.designation}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Team
