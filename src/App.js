import Top from './components/top/top';
import tw from 'twin.macro';
import Bottom from './components/bottom/Bottom';
import Middle from './components/middle/Middle';

const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`;

function App() {
	return (
		<AppContainer>
			<Top />
			<Middle />
			<Bottom />
		</AppContainer>
	);
}

export default App;
