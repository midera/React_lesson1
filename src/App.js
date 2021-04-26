import logo from './logo.svg';
import './App.css';
import CharacterComponent from './components/characterStyle/characterComponent'

function App() {
    return (
        <div>
            <CharacterComponent description={'Майя Плисецкая'}
                                image={'https://bigenc.ru/media/2016/10/27/1235239937/27822.jpg.262x-.png'}/>
            <CharacterComponent description={'«Я с шиком сыграла свою крошечную роль»'}
                                image={'https://lh6.ggpht.com/dEoee6i9Cw0WVPRB_3GVCcY66A39hOsq88So73n8VU90GvfX2bey-y5CXWtN=s1200'}/>

            <CharacterComponent
               description ={'Mайя Плисецкая. Великая балерина оставалась верна пуантам всю жизнь.\n' +
               '            «Ave Майя» танцевала в 80… нарушая все законы творческого долголетия.\n' +
               '            «Я чувствую, когда я „беру“ зал». И зал сдавался. Без боя.'}
                image={'https://n1s1.elle.ru/51/d9/07/51d9076ff155c6b7afa9f13ea3a6e882/620x765_1_12e043c7b2610ad6fa5aa621d3071975@690x851_0xd42ee42a_12473110771430822611.jpeg'}/>

        </div>
    );
}

export default App;
