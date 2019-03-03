import React from 'react';

const ProductionSection = (props) => (
    <div className="container-fluid row my-5">
        {/*<h3>Две линейки табака</h3>*/}
        <div className="col-lg-6 col-12">
            <h2 className="display-4 pb-3">
                Silver
            </h2>
            <ul className="text-left">
                <li className="lead">Средний по крепости табак, в состав которого входят табачные листы Вирджинии и Берли</li>
                <li className="lead" >Для истинных ценителей и любителей кальяна</li>
                <li className="lead">Насыщенная палитра вкусов. Вкус табака очень хорошо раскрывается, сам табак не боится перегрева</li>
                <li className="lead">Акцизный табак</li>
            </ul>
        </div>
        <div className="col-lg-6 col-12">
            <h2 className="display-4 pb-3">
                Platinum
            </h2>
            <ul className="text-left">
                <li className="lead">Легко курится и доставляет эстетическое удовольствие каждому</li>
                <li className="lead">Для тех, кто любит спокойное и дымное курение</li>
                <li className="lead">Полностью раскрывается вкус и аромат, тем самым подчеркивая истинное качество продукта</li>
                <li className="lead">Акцизный табак</li>
            </ul>
        </div>
    </div>
);
export default ProductionSection;
