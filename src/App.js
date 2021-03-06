import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavSection from "./molecules/NavSection";
import Slider from "./molecules/Slider";
import Jumbotron from "./molecules/Jumbotron";
import BriefInfo from "./molecules/BriefInfo";
import InfoSection from "./molecules/InfoSection";
import Connect from './molecules/Connect';
import Footer from './molecules/Footer';
import Home from './templates/Home';
import Modal from './molecules/Modal'
import PriceList from './molecules/PriceList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      olderThan18: localStorage.getItem('olderThan18'),
    }
  }


  handleModal = (callbackFromChild) => {
    this.setState({ olderThan18: callbackFromChild });
  }

  

  render() {
    return (
      <div className="App">
        {!this.state.olderThan18 && <Modal callBackFromParent={this.handleModal} /> } 
        
        {
          this.state.olderThan18 &&
          <div>
            <Home />
            <Jumbotron />
            <BriefInfo />
            <InfoSection />
            <PriceList/>
            <Connect />
            <Footer />
          </div>
        }
        {/* 
Nazilya Sharipova, [28.01.19 12:35]
ВКУСОВАЯ ПАЛИТРА ТАБАКА ZR PREMIUM: 
1. BASIL - БАЗИЛИК. АРОМАТ СВЕЖЕГО БАЗИЛИКА. 
2. BIRD CHERRY - ЧЕРЕМУХА. СЛАДКО-КИСЛОВАТЫЙ, СЛЕГКА ВЯЖУЩИЙ ВКУС. 
3. BERGAMOT - БЕРГАМОТ. РАСТЕНИЕ, ОТДАЛЕННО НАПОМИНАЮЩЕЕ ЛИМОН ИЛИ ЛАЙМ. ОТЛИЧНО РАССЛАБИТ И ДОБАВИТ АРОМАТ БЕРГАМОТА ВАШЕМУ МИКСУ. 
4. PRICKLE - КОЛЮЧКА. ПО ВКУСУ НАПОМИНАЕТ КАКТУС, СОЧЕТАЕТСЯ В РАЗНЫХ МИКСАХ. 
5. WAFER - ВАФЛИ. НЕЖНЫЙ, СЛАДКИЙ ВКУС ХРУСТЯЩИХ ВАФЕЛЬ, ОДИН ИЗ САМЫХ ТОПОВЫХ ВКУСОВ. 
6. LYCHEES - ЛИЧИ. КИТАЙСКИЙ ФРУКТ, ИМЕЕТ НЕЗАБЫВАЕМЫЙ ВКУС, КОТОРЫЙ СТОИТ ПОПРОБОВАТЬ. 
7. FEIJOA - ФЕЙХОА. ОЧЕНЬ НАСЫЩЕННЫЙ ВКУС, МАКСИМАЛЬНО ПРИБЛИЖЕН К НАСТОЯЩЕМУ. 
8. FRESH MANGO - СВЕЖИЙ МАНГО. НАСЫЩЕННЫЙ, ЯРКИЙ, СЛАДКОВАТЫЙ ВКУС ТРОПИЧЕСКОГО ФРУКТА. 
9. JUICY PEACH - СОЧНЫЙ ПЕРСИК. ОСВЕЖАЮЩИЙ, ЯРКИЙ, НАСЫЩЕННЫЙ ВКУС, ОТЛИЧНО СОЧЕТАЕТСЯ С GREEN BANANA. 
10. PIEPHLANT - РЕВЕНЬ. ИМЕЕТ РЕЗКО ВЫРАЖЕННЫЙ КИСЛЫЙ ВКУС С ХАРАКТЕРНЫМ ПРИВКУСОМ И АРОМАТОМ НАПОМИНАЮЩИМ ЯБЛОКИ. 
11. POMEGRANATE JUICE - ГРАНАТОВЫЙ СОК. КОКТЕЙЛЬ НА ОСНОВЕ ГРАНАТОВОГО СОКА. 
12. ITALIAN SPICES - ИТАЛЬЯНСКИЕ СПЕЦИИ. СПЕЦИФИЧЕСКИЙ, ПРЯНЫЙ ВКУС СПЕЦИЙ ИТАЛЬЯНСКОЙ КУХНИ. 
13. RIPE RASPBERRIES - СПЕЛАЯ МАЛИНА. ДУШИСТЫЙ, АРОМАТНЫЙ ВКУС СОЧНОЙ СПЕЛОЙ МАЛИНЫ. 
14. QUINCE - АЙВА. ОЧЕНЬ НАСЫЩЕННЫЙ ВКУС, НЕМНОГО СЛАДКИЙ, НЕМНОГО ТЕРПКОВАТЫЙ И ВЯЖУЩИЙ. 
15. MARMALADE - МАРМЕЛАД. СЛАДКИЙ ФРУКТОВЫЙ ВКУС, ПРИЯТНЫЙ АРОМАТ, НАПОМИНАЕТ КОНФЕТКИ BON PARI. 
16. LEMON LOLLIPOP - ЛИМОННЫЙ ЛЕДЕНЕЦ. ВКУС НАПОМИНАЕТ ЛИМОННЫЕ КОНФЕТКИ, С КИСЛИНКОЙ ЦЕДРЫ. 
17. CREAM STRAWBERRIES - СЛИВОЧНАЯ ЗЕМЛЯНИКА. ВКУС НЕЖНЫЙ, СЛАДКИЙ, СЛИВОЧНЫЙ, ИДЕАЛЬНЫЙ БАЛАНС ЗЕМЛЯНИКИ И СЛИВОК. 
18. CREAM RASPBERRY - СЛИВОЧНАЯ МАЛИНА. СЛИВОЧНАЯ И УМЕРЕННО-СЛАДКАЯ, С ЕДВА ЗАМЕТНОЙ КИСЛИНКОЙ И МЯГКИМ ЯГОДНЫМ ПОСЛЕВКУСИЕМ. 
19. WILD BERRY - ЛЕСНЫЕ ЯГОДЫ. СВЕЖИЙ ВКУС ЛЕСНЫХ ЯГОД С ЛЕГКОЙ КИСЛИНКОЙ И СЛАДКИМИ НОТКАМИ МАЛИНЫ И ЗЕМЛЯНИКИ. 
20. GREEN BANANA - ЗЕЛЕНЫЙ БАНАН. ВКУС НЕ ТАКОЙ ПРИТОРНО-СЛАДКИЙ КАК ОБЫЧНЫЙ, С НЕБОЛЬШИМ ОТТЕНКОМ ЗЕЛЕНУШКИ, БОЛЕЕ СВЕЖИЙ АРОМАТ. 
21. FRESH MELON - СВЕЖАЯ ДЫНЯ. ПРЕДСТАВЛЯЕТ ИДЕАЛЬНЫЙ БАЛАНС ВКУСА С ЕСТЕСТВЕННЫМ АРОМАТОМ ДЫНИ. 
22. BLACK LEMONADE - ЧЁРНЫЙ ЛИМОНАД. ВКУС СЛАДКИЙ, НАПОМИНАЕТ COCA-COLA БЕЗ ГАЗОВ, НЕКОТОРЫЕ НАХОДЯТ В ЭТОМ ВКУСЕ НОТКИ ГАЗИРОВКИ "БАЙКАЛ". 
23. MINT - МЯТА С МЕНТОЛОМ. ВКУС ПЕРЕЧНОЙ МЯТЫ С ХОЛОДКОМ. ОТЛИЧНО ОСВЕЖАЕТ И СОЧЕТАЕТСЯ С ЛЮБЫМ МИКСОМ. 
24. WATERMELON LEMONADE - АРБУЗНЫЙ ЛИМОНАД (NEW). ЭТО НЕЖНЫЙ, СОЧНЫЙ ВКУС СЛАДКОГО СПЕЛОГО АРБУЗА, ТОТ ВКУС, КОТОРЫЙ ХОЧЕТСЯ КУРИТЬ И КУРИТЬ. 
25. ISABEL - ИЗАБЕЛЛА (NEW). В ЭТОМ ВКУСЕ СОЧЕТАЕТСЯ ТЕРПКИЙ ВИНОГРАДНЫЙ АРОМАТ, КОТОРЫЙ СМЕШИВАЕТСЯ С НОТАМИ ЛУЧШИХ ИТАЛЬЯНСКИХ ВИН. 
26. SEA BUCKTHORN - ОБЛЕПИХА (NEW). ХАРАКТЕРНЫЙ КИСЛОВАТЫЙ ОТТЕНОК ОБЛЕПИХИ, НЕ ПОХОЖИЙ НА ЧТО-ЛИБО ИНОЕ, СДОБРЕННЫЙ НЕЖНОЙ СЛАДОСТЬЮ. 
27. BARBERRY - БАРБАРИС (NEW). ВКУС НАПОМИНАЕТ ЛЕДЕНЦЫ БАРБАРИСКИ ИЗ ДЕТСТВА. ИМЕЕТ СЛАДКИЙ, НАСЫЩЕННЫЙ АРОМАТ. 
28. SCANDINAVIAN BERRIES - СКАНДИНАВСКИЕ ЯГОДЫ (NEW). ЛЁГКИЙ ДЕСЕРТ ИЗ СПЕЛЫХ СКАНДИНАВСКИХ ЯГОД С ОСВЕЖАЮЩЕЙ ЛЕДЯНОЙ НОТКОЙ. 
29. CUCUMBER - ОГУРЕЦ (NEW). ЛЕГКАЯ СМЕСЬ ЗЕЛЕНОГО ОГУРЦА С ЦВЕТОЧНЫМИ ТРАВЯНЫМИ НОТКАМИ. ХОРОШО ПРОЯВИЛ СЕБЯ В СОЧЕТАНИИ СО МНОГИМИ ВКУСАМИ В МИКСАХ. 
30. SUMMER COCKTAIL - ЛЕТНИЙ КОКТЕЙЛЬ (NEW). КИСЛО-СЛАДКИЙ ВКУС ЛИМОНАДА, БАЗИЛИКА, АРБУЗА И ОГУРЦА. 
31. PRUNES WITH CINNAMON - ЧЕРНОСЛИВ С КОРИЦЕЙ (NEW). НАСЫЩЕННЫЙ И СОЧНЫЙ ВКУС ЧЕРНОСЛИВА С КОРИЦЕЙ, НЕМНОГО КИСЛОВАТЫЙ, С ОТТЕНКОМ СЛАДОСТИ. 
32. STRAWBERRY WITH MANGO - КЛУБНИКА С МАНГО (NEW). ЛЕГКИЙ, СЛАДКИЙ ВКУС КЛУБНИЧНОГО ВАРЕНЬЯ. ОДИН ИЗ ЛУЧШИХ КЛУБНИЧНЫХ ВКУСОВ СРЕДИ ВСЕХ ПРОИЗВОДИТЕЛЕЙ. ОЧЕНЬ БЫСТРО СТАЛ ЛЮБИМЫМ ВКУСОМ ДЛЯ МНОГИХ ЦЕНИТЕЛЕЙ. 
33. PEACH WITH HONEY - ПЕРСИК С МЁДОМ (NEW). ПРЯНЫЙ, НАТУРАЛЬНЫЙ, ЯРКО-ВЫРАЖЕННЫЙ ПЕРСИК. КИСЛО-СЛАДКИЙ МИКС С ЛЕГКИМИ НОТКАМИ ЦВЕТОЧНОГО МЁДА. 
34. BLUEBERRY CHAMOMILE TEA - ЧАЙ ЧЕРНИКА С РОМАШКОЙ (NEW). ОЧЕНЬ НЕОБЫЧНАЯ ЧЕРНИКА. КРОМЕ ЧЕРНИКИ ЗДЕСЬ ИМЕЮТСЯ ДОПОЛНИТЕЛЬНЫЕ НОТКИ ОСВЕЖАЮЩЕЙ МЯТЫ И РОМАШКИ. 
35. RASPBERRY BLEND - МАЛИНОВЫЙ БЛЕНД (NEW). ЯВЛЯЕТСЯ ОРИГИНАЛЬНЫМ ТВОРЕНИЕМ. ОБЛАДАЕТ ПОТРЯСАЮЩИМ, УНИКАЛЬНЫМ АРОМАТОМ, СМЕШАННЫМ С ПРИЯТНЫМ ВКУСОМ МАЛИНЫ.
 */}
      </div>
    );
  }
}

export default App;
