import React, { useState, useEffect} from 'react';
import Matchers from './components/Matchers';
import axios from 'axios';
import {Sessao, ImgPhoto2, Nome, Bio, Header, Conteine, CardMatchers} from './styled'

 const  MeusMatchers = (props) => {

    useEffect(() => {
        meusMatches(props.matches)
      },[] )

    const  meusMatches =  props.matches.map((matc) => {
        return (
          <Sessao id={matc.id}>
            <ImgPhoto2 src={matc.photo}/>
            <div><Nome>{matc.name} </Nome> </div>
          </Sessao>
        )
      })

      return (
     <div>      {meusMatches} </div>
      )
   


}