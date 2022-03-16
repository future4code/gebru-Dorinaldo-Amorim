import React from 'react';
import styled from "styled-components";
import Header from './components/Header';
import PlaylistCreationPage from './components/PlaylistCreationPage';
import PlaylistManagerPage from './components/PlaylistManagerPage';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: beige;
`


class App extends React.Component {
  state = {
    currentPage: "playlistCreationPage"
  }

  changePage = (currentPage) => {
    this.setState({currentPage: currentPage})
  }

  render () {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlistCreationPage") {
        return <PlaylistCreationPage />
      } else if (this.state.currentPage === "playlistManagerPage") {
        return <PlaylistManagerPage />
      }
    }

    return (
      <AppContainer>
        <Header 
          changePage={this.changePage}
        />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}

export default App;










//Parte 1 - https://www.loom.com/share/f210c6429eab46d3a1ed6526b7fff152
//Parte 2 - https://www.loom.com/share/214a51e12dd548f7bd1f37b532d7b884
//Parte 3 - https://www.loom.com/share/d6d7dd1f58214b2ab087b997f946d823
