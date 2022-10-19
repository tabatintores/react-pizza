import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import PizzaBlock from "../components/PizzaBlock";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PizzaBlock">
                <PizzaBlock/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
