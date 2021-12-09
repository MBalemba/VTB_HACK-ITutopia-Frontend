import React, {Component} from 'react';
import './Slider.css'


function debounce(func, time = 140) {
    let timer;
    return function (event) {
        clearTimeout(timer);
        timer = setTimeout(func, time, event)
    }
}

class SliderCards extends Component {

    constructor(props) {
        super(props);
        this.currentSlide = 0


        this.state = {
            arr: [1, 2],
            activeItem: 1,
            isPause: false,
        }


        this.resizeGallery = this.resizeGallery.bind(this)
        this.setParameters = this.setParameters.bind(this)
        this.setEvents = this.setEvents.bind(this)
        this.startDrag = this.startDrag.bind(this)
        this.stopDrag = this.stopDrag.bind(this)
        this.pointerMove = this.pointerMove.bind(this)
        this.setStylePosition = this.setStylePosition.bind(this)
        this.resetStylePosition = this.resetStylePosition.bind(this)
        this.setStyleTransition = this.setStyleTransition.bind(this)
        this.resetStyleTransition = this.resetStyleTransition.bind(this)
        this.getPosition = this.getPosition.bind(this)
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)

        this.switchTimeInterval= this.switchTimeInterval.bind(this)

    }



    componentDidMount() {
        this.setParameters()
        // this.setParametersTimeInterval()
        this.setEvents()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const prevDevices = prevProps?.devices
        const currentDevices = this.props?.devices


        if(prevDevices !== currentDevices){
            this.setParameters()
        }
    }

    componentWillUnmount() {

        clearInterval(this.updateSliderIntervalId)
        this.removeEvents()
    }

    setParametersTimeInterval() {
        this.updateSliderIntervalId = setInterval(this.setParameters,2000 )
    }

    switchTimeInterval() {
        if (this.currentSlide < this.numberItemsGallery - 1) {
            this.currentSlide = this.currentSlide + 1;
            this.x = this.getPosition()
            this.resetStylePosition()
        } else {
            this.currentSlide = 0;
            this.x = this.getPosition()
            this.resetStylePosition()
        }
    }

    setParameters() {
        this.containerNode = document.getElementById(`gallery_${this.props.id}`)
        this.lineNode = this.containerNode.querySelector(`.gallery-line_${this.props.id}`)
        this.numberItemsGallery = this.lineNode.childElementCount;


        const coordsContainer = this.containerNode.getBoundingClientRect()
        this.width = 340;
        this.lineNode.style.width = this.numberItemsGallery * this.width + 'px'
        this.arr = []
        for (let i = 0; i < this.numberItemsGallery; i++) {
            this.arr.push(i)
        }

        this.setState({
            arr: this.arr
        })

        this.lineNode.childNodes.forEach(slideNodes => {
            slideNodes.style.width = this.width + 'px'
        });

        this.x = this.getPosition()
        this.resetStylePosition()
    }

    getPosition() {
        this.props.handleCurrentSlide(this.currentSlide);
        return -this.currentSlide * this.width
    }

    resizeGallery() {
        console.log('galleryResizing')
        this.setParameters();
    }

    setEvents() {
        this.debounceResizeGalary = debounce(this.resizeGallery)
        window.addEventListener('resize', this.debounceResizeGalary)
        this.containerNode.addEventListener('mouseenter', this.mouseEnter)
        this.containerNode.addEventListener('mouseleave', this.mouseLeave)
        this.setStyleTransition()
        /*this.intervalId = setInterval(this.switchTimeInterval, 5000)*/
    }

    removeEvents() {
        window.removeEventListener('resize', this.debounceResizeGalary)
        this.containerNode.removeEventListener('mouseenter', this.mouseEnter)
        this.containerNode.removeEventListener('mouseleave', this.mouseLeave)
    }

    mouseEnter() {
        // console.log('mouseenter')
        this.setState({isPause: true})
        this.isLeave = false
        window.addEventListener('pointerdown', this.startDrag)
        window.addEventListener('pointerup', this.stopDrag)
    }

    mouseLeave() {
        // console.log('mouseleave')

        this.isLeave = true
        if (!this.isStartDrag) {
            window.removeEventListener('pointerdown', this.startDrag)
            window.removeEventListener('pointerup', this.stopDrag)
            this.setState({isPause: false})
            /*this.intervalId = setInterval(this.switchTimeInterval, 5000)*/
        }
    }



    startDrag(e) {
        e.preventDefault()
        this.isStartDrag = true
        this.resetStyleTransition()
        this.dragShift = 0
        this.clickX = e.pageX
        window.addEventListener('pointermove', this.pointerMove)
    }

    pointerMove(e) {
        // console.log('pointer move worked')
        this.dragX = e.pageX;
        this.dragShift = this.dragX - this.clickX;
        this.setStylePosition()
    }

    stopDrag() {
        window.removeEventListener('pointermove', this.pointerMove)
        if (
            this.dragShift > this.width / 4 &&
            this.currentSlide > 0
        ) {
            console.log('width: ', this.width)

        if(Math.abs(this.dragShift)%this.width>this.width / 4) this.currentSlide = this.currentSlide - Math.ceil(Math.abs(this.dragShift)/this.width);
        else if(Math.abs(this.dragShift)%this.width<this.width / 4) this.currentSlide = this.currentSlide - Math.floor(Math.abs(this.dragShift)/this.width);
            if(this.currentSlide<0){
                this.currentSlide = 0
            }
            this.x = this.getPosition()

        }

        if (
            this.dragShift < -this.width / 4 &&
            this.currentSlide < this.numberItemsGallery - 1
        ) {
            console.log('width: ', this.width)
            if(Math.abs(this.dragShift)%this.width>this.width / 4) this.currentSlide = this.currentSlide + Math.ceil(Math.abs(this.dragShift)/this.width);
            else if(Math.abs(this.dragShift)%this.width<this.width / 4) this.currentSlide = this.currentSlide + Math.floor(Math.abs(this.dragShift)/this.width);
            /*this.currentSlide = this.currentSlide + 1;*/
            if(this.currentSlide>this.numberItemsGallery-1){
                this.currentSlide = this.numberItemsGallery-1
            }
            this.x = this.getPosition()
        }

        this.setStyleTransition()
        this.resetStylePosition()
        this.isStartDrag = false
        if (this.isLeave) {
            window.removeEventListener('pointerdown', this.startDrag)
            window.removeEventListener('pointerup', this.stopDrag)
            this.setState({isPause: false})
            /*this.intervalId = setInterval(this.switchTimeInterval, 5000)*/
        }
        window.removeEventListener('pointermove', this.pointerMove)
    }

    setStylePosition() {
        this.lineNode.style.transform = `translate3d(${this.x + this.dragShift}px, 0, 0)`
    }

    resetStylePosition() {
        this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;
        console.log(this.lineNode.childNodes[this.currentSlide].style);

        this.lineNode.childNodes.forEach(el=>{
            el.childNodes[0].style.transform = 'translate(0px, 0px)';

        })

        this.lineNode.childNodes[this.currentSlide].childNodes[0].style.transition = `all 1s ease 0s`
        this.lineNode.childNodes[this.currentSlide].childNodes[0].style.transform = 'translate(0px, -10px)'
        this.setState({activeItem: this.currentSlide})
    }

    setStyleTransition() {
        this.lineNode.style.transition = `all 1s ease 0s`
    }

    resetStyleTransition() {
        this.lineNode.style.transition = `all 0s ease 0s`
    }

    increase() {
        if (this.currentSlide < this.numberItemsGallery - 1) {
            this.currentSlide = this.currentSlide + 1;
            this.x = this.getPosition()
            this.resetStylePosition()
        } else {
            this.currentSlide = 0;
            this.x = this.getPosition()
            this.resetStylePosition()
        }
    }

    decrease() {

        if (this.currentSlide > 0) {
            this.currentSlide = this.currentSlide - 1;
            this.x = this.getPosition()
            this.resetStylePosition()
        } else {
            this.currentSlide = this.numberItemsGallery - 1;
            this.x = this.getPosition()
            this.resetStylePosition()
        }
    }

    dotTurn(id) {
        this.currentSlide = id
        this.x = this.getPosition()
        this.resetStylePosition()
    }


    render() {
        return (
            <div ref={this.ref} id={`gallery_${this.props.id}`} className={'gallery'}>


                <div className={'slideInsides'}>

                    <div className={'gallery-line '+`gallery-line_${this.props.id}` }>
                        {this.props.render()}
                        {/*<div className="slide slide-3">*/}
                        {/*    <img src="https://images.wbstatic.net/bners1/big_holodilnik_25_08.jpg" alt=""*/}
                        {/*         className="slide_slideImage__29MbQ"/>*/}
                        {/*</div>*/}
                        {/*<div className="slide slide-1">*/}
                        {/*    <img src="https://images.wbstatic.net/bners1/big_school_25_08.jpg" alt=""*/}
                        {/*         className="slide_slideImage__29MbQ"/>*/}
                        {/*</div>*/}
                        {/*<div className="slide slide-2">*/}
                        {/*    <img src="https://images.wbstatic.net/bners1/pull_666.jpg" alt=""*/}
                        {/*         className="slide_slideImage__29MbQ"/>*/}
                        {/*</div>*/}
                        {/*<div className="slide slide-4">*/}
                        {/*    <img src="https://images.wbstatic.net/bners1/big_school_25_08.jpg" alt=""*/}
                        {/*         className="slide_slideImage__29MbQ"/>*/}
                        {/*</div>*/}
                    </div>
                </div>



            </div>
        );
    }
}

export default SliderCards;