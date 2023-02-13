import Card from './Card.js'
import React from 'react'

const CardComponent = ()=> {
    return (
        <div>
            <Card 
       image = 'https://source.unsplash.com/WLxQvbMyfas'
        place = 'J A P A N'
        heading = 'Mount Fuji'
        availability = '12 Jan, 2021 - 24 Jan, 2021'
        details = 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
      />
      <Card 
        image = 'https://source.unsplash.com/JmuyB_LibRo'
        place ='A U S T R A L I A'
        heading = 'Sydney Opera House'
        availability = '27 May, 2021 - 8 Jun, 2021'
        details = 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centurys most famous and distinctive buildings'
      />
      <Card 
        image =  'https://source.unsplash.com/3PeSjpLVtLg'
        place=   'N O R W A Y'
        heading = 'Geirangerfjord'
        availability = '01 Oct, 2021 - 18 Nov, 2021'
        details = 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
      />
        </div>
    )
}

export default CardComponent;