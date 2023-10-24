<script>
import * as d3 from 'd3';
import * as cloud from 'd3-cloud';

const margin = {top: 5, right: 5, bottom: 5, left: 5}
/* const width = 70
const height = 50 */
const width = window.innerWidth*(70/100) - (margin.left + margin.right)
const height = 150 + margin.top + margin.bottom

/* const padding =5 */
const color = "var(--sdg"
export default {
    props: {
        data: {
            type: Object
        },
        fontSizeMapper: {
            type: Function
        },
        sdg:{
            type: String
        }
    },
    mounted() {
        console.log(this.data)
        this.createCanvas()
        
    },
    methods: {
        createCanvas: function() {
            d3.select(this.$el).selectAll('*').remove();
            cloud()
                .size([width, height])
                .padding(5)
                .rotate(0)
                .words(this.data.map(function(d) { return {text: d.text, value:d.value}; }))
                .fontSize(this.fontSizeMapper)
                .on('end', this.draw)
                .start();
            /* if(this.colors)
                this.fill = d3.scaleOrdinal().range(this.colors)
            else
                this.fill = d3.scaleOrdinal(d3.schemeCategory10) */
        },
        draw: function(words) {
            console.log(words)
             d3.select(this.$el)
             // append the svg object to the body of the page
            .append('svg')
                /* .attr('width', width + 'vw')
                .attr('height', height + 'vh') */
                .attr('width', width )
                .attr('height', height) 
            .append('g')
                .attr('transform', `translate(`+ (width / 2 )+`,`+height / 2+`)`)
                .selectAll('text')
                    .data(words)
                .enter()
                .append('text')
                    .style('font-size', d => {
                        return `${d.size}px`
                    })
                    .style('fill', color+this.sdg+')')
                    .attr('text-anchor', 'middle')
                    .attr('transform',d => { 
                        /* console.log ("d.position: "+ d.x +", " + d.y ) */
                        return "translate(" + [d.x, d.y] + ")" 
                    })
                .text(d => d.text)
        },
        components: {
        cloud,
    },
    }
 }
</script>

<template>
    <div class="wordCloud" ref="wordCloud">
    </div>
</template>

<style scoped>
.wordCloud svg{
    border:2px solid red;
}
</style>
