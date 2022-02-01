
import React from 'react';
import {getMergeSortAnimations,getQuickSortanimations,getBubbleSortanimations,getInsertionSortanimations,getHeapSortanimations} from '../sortingAlgorithms/sortingAlgorithms';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = 300;

const PRIMARY_COLOR = '#2C5F2DFF';

const SECONDARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component {
  
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }
  
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array =[];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
            array.push(randomIntFromInterval(5,600));
        }

        var elements = document.getElementsByClassName('array-bar'), i, len;
  
        for (i = 0, len = elements.length; i < len; i++) {
            elements[i].style.backgroundColor = '#CC313D';
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i=0; i< animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneI, barTwoI] = animations[i];
                const barOneStyle = arrayBars[barOneI].style;
                const barTwoStyle = arrayBars[barTwoI].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else{
                setTimeout(() => {
                    const [barOneI, newH] = animations[i]; 
                    const barOneStyle = arrayBars[barOneI].style;
                    barOneStyle.height = `${newH}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort(){
        const animations = getQuickSortanimations(this.state.array);
        for(let i=0; i< animations.length; i++){

            console.log(animations[i]);
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barIndex, newH] = animations[i].idx;
            if(animations[i].pos === 'inPos'){
                const barOneStyle = arrayBars[barIndex].style;
                setTimeout(() => {                  
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.height = `${newH}px`;
                }, i *ANIMATION_SPEED_MS);
            }
            else{
                const barOneStyle = arrayBars[barIndex].style;
                setTimeout(() => {               
                    barOneStyle.height = `${newH}px`;
                }, i *ANIMATION_SPEED_MS);
            }
             
        }
    }

    bubbleSort(){
        
        const animations = getBubbleSortanimations(this.state.array);
        for(let i=0; i< animations.length; i++){

            console.log(animations[i]);
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barIndex, newH] = animations[i].idx;
            if(animations[i].pos === 'inPos'){
                const barOneStyle = arrayBars[barIndex].style;
                setTimeout(() => {                  
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.height = `${newH}px`;
                }, i *ANIMATION_SPEED_MS);
            }
            else{
                const barOneStyle = arrayBars[barIndex].style;
                setTimeout(() => {              
                    barOneStyle.height = `${newH}px`;
                }, i *ANIMATION_SPEED_MS);

            }
             
        }
    }

    heapSort(){

        const animations = getHeapSortanimations(this.state.array);
        for(let i=0; i< animations.length; i++){

            console.log(animations[i]);
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barIndex, newH] = animations[i].idx;
            if(animations[i].pos === 'inPos'){
                const barOneStyle = arrayBars[barIndex].style;
                setTimeout(() => {                  
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.height = `${newH}px`;
                }, i *ANIMATION_SPEED_MS);
            }
            else{
                const barOneStyle = arrayBars[barIndex].style;
                setTimeout(() => {              
                    barOneStyle.height = `${newH}px`;
                }, i *ANIMATION_SPEED_MS);

            }
             
        }
    }

    insertionSort(){
        const animations = getInsertionSortanimations(this.state.array);
        for(let i=0; i< animations.length; i++){

            console.log(animations[i]);
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barIndex, newH] = animations[i].idx;
            if(animations[i].pos === 'inPos'){
                const barOneStyle = arrayBars[barIndex].style;
                setTimeout(() => {                  
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.height = `${newH}px`;
                }, i *ANIMATION_SPEED_MS);
            }
            else{
                const barOneStyle = arrayBars[barIndex].style;
                setTimeout(() => {              
                    barOneStyle.height = `${newH}px`;
                }, i *ANIMATION_SPEED_MS);

            }
             
        }
    }
  
    render() {

        const {array} = this.state;

        return (
            <div className='container'>
                <div className='array-container'>

                    <ul className='array-buttons'>
                        <li> <button className='button-56' onClick={()=> this.resetArray()}>Generate New Array</button> </li>
                        <li> <button className='button-56' onClick={()=> this.mergeSort()}>Merge Sort</button> </li>
                        <li> <button className='button-56' onClick={()=> this.quickSort()}>Quick Sort</button> </li>
                        <li> <button className='button-56' onClick={()=> this.bubbleSort()}>Bubble Sort</button> </li>
                        <li> <button className='button-56' onClick={()=> this.heapSort()}>Heap Sort</button> </li>
                        <li> <button className='button-56' onClick={()=> this.insertionSort()}>Insertion Sort</button> </li>
                    </ul>               
                    <div className='bar-container'>
                        {array.map((value,idx) => (
                            <div 
                                className='array-bar' 
                                key={idx}
                                style={{height: `${value}px`}}>
                            </div>
                        ))}
                    </div>                   
                </div>
            </div>
            
        );
  }
}

function randomIntFromInterval(min, max){
    // source: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1) + min)
}
