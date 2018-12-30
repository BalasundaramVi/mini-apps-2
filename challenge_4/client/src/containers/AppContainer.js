import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => ({
  mineCount: state.mineCount,
  gameOver: state.gameOver,
});

const mapDispatchToProps = () => ({ });

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
