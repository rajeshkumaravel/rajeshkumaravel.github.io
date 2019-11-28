/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 13776.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 3.0], [16.5, 3.0], [16.6, 3.0], [16.7, 3.0], [16.8, 3.0], [16.9, 3.0], [17.0, 3.0], [17.1, 3.0], [17.2, 3.0], [17.3, 3.0], [17.4, 3.0], [17.5, 3.0], [17.6, 3.0], [17.7, 3.0], [17.8, 3.0], [17.9, 3.0], [18.0, 3.0], [18.1, 3.0], [18.2, 3.0], [18.3, 3.0], [18.4, 3.0], [18.5, 3.0], [18.6, 3.0], [18.7, 3.0], [18.8, 3.0], [18.9, 3.0], [19.0, 3.0], [19.1, 3.0], [19.2, 3.0], [19.3, 3.0], [19.4, 3.0], [19.5, 3.0], [19.6, 3.0], [19.7, 3.0], [19.8, 3.0], [19.9, 3.0], [20.0, 3.0], [20.1, 3.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 3.0], [20.8, 3.0], [20.9, 3.0], [21.0, 3.0], [21.1, 3.0], [21.2, 3.0], [21.3, 3.0], [21.4, 3.0], [21.5, 3.0], [21.6, 3.0], [21.7, 3.0], [21.8, 3.0], [21.9, 3.0], [22.0, 3.0], [22.1, 3.0], [22.2, 4.0], [22.3, 4.0], [22.4, 4.0], [22.5, 4.0], [22.6, 4.0], [22.7, 4.0], [22.8, 4.0], [22.9, 4.0], [23.0, 4.0], [23.1, 4.0], [23.2, 4.0], [23.3, 4.0], [23.4, 4.0], [23.5, 4.0], [23.6, 4.0], [23.7, 4.0], [23.8, 4.0], [23.9, 4.0], [24.0, 4.0], [24.1, 4.0], [24.2, 4.0], [24.3, 4.0], [24.4, 4.0], [24.5, 4.0], [24.6, 4.0], [24.7, 4.0], [24.8, 4.0], [24.9, 4.0], [25.0, 4.0], [25.1, 4.0], [25.2, 4.0], [25.3, 4.0], [25.4, 4.0], [25.5, 4.0], [25.6, 4.0], [25.7, 4.0], [25.8, 4.0], [25.9, 4.0], [26.0, 4.0], [26.1, 4.0], [26.2, 4.0], [26.3, 4.0], [26.4, 4.0], [26.5, 4.0], [26.6, 4.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 5.0], [27.5, 5.0], [27.6, 5.0], [27.7, 5.0], [27.8, 5.0], [27.9, 5.0], [28.0, 5.0], [28.1, 5.0], [28.2, 5.0], [28.3, 5.0], [28.4, 5.0], [28.5, 5.0], [28.6, 5.0], [28.7, 5.0], [28.8, 5.0], [28.9, 5.0], [29.0, 5.0], [29.1, 5.0], [29.2, 5.0], [29.3, 5.0], [29.4, 5.0], [29.5, 5.0], [29.6, 5.0], [29.7, 5.0], [29.8, 5.0], [29.9, 5.0], [30.0, 5.0], [30.1, 5.0], [30.2, 5.0], [30.3, 5.0], [30.4, 5.0], [30.5, 5.0], [30.6, 5.0], [30.7, 5.0], [30.8, 5.0], [30.9, 5.0], [31.0, 5.0], [31.1, 5.0], [31.2, 5.0], [31.3, 5.0], [31.4, 5.0], [31.5, 5.0], [31.6, 5.0], [31.7, 5.0], [31.8, 5.0], [31.9, 5.0], [32.0, 5.0], [32.1, 5.0], [32.2, 5.0], [32.3, 5.0], [32.4, 5.0], [32.5, 6.0], [32.6, 6.0], [32.7, 6.0], [32.8, 6.0], [32.9, 6.0], [33.0, 6.0], [33.1, 6.0], [33.2, 6.0], [33.3, 6.0], [33.4, 6.0], [33.5, 6.0], [33.6, 6.0], [33.7, 6.0], [33.8, 6.0], [33.9, 6.0], [34.0, 6.0], [34.1, 6.0], [34.2, 6.0], [34.3, 6.0], [34.4, 6.0], [34.5, 6.0], [34.6, 6.0], [34.7, 6.0], [34.8, 6.0], [34.9, 6.0], [35.0, 6.0], [35.1, 6.0], [35.2, 6.0], [35.3, 6.0], [35.4, 6.0], [35.5, 6.0], [35.6, 6.0], [35.7, 6.0], [35.8, 6.0], [35.9, 6.0], [36.0, 6.0], [36.1, 6.0], [36.2, 6.0], [36.3, 6.0], [36.4, 6.0], [36.5, 6.0], [36.6, 6.0], [36.7, 6.0], [36.8, 6.0], [36.9, 6.0], [37.0, 6.0], [37.1, 6.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 7.0], [37.9, 7.0], [38.0, 7.0], [38.1, 7.0], [38.2, 7.0], [38.3, 7.0], [38.4, 7.0], [38.5, 7.0], [38.6, 7.0], [38.7, 7.0], [38.8, 7.0], [38.9, 7.0], [39.0, 7.0], [39.1, 7.0], [39.2, 7.0], [39.3, 7.0], [39.4, 7.0], [39.5, 7.0], [39.6, 7.0], [39.7, 7.0], [39.8, 7.0], [39.9, 7.0], [40.0, 7.0], [40.1, 7.0], [40.2, 7.0], [40.3, 7.0], [40.4, 7.0], [40.5, 7.0], [40.6, 7.0], [40.7, 7.0], [40.8, 7.0], [40.9, 7.0], [41.0, 7.0], [41.1, 7.0], [41.2, 7.0], [41.3, 7.0], [41.4, 7.0], [41.5, 7.0], [41.6, 7.0], [41.7, 7.0], [41.8, 8.0], [41.9, 8.0], [42.0, 8.0], [42.1, 8.0], [42.2, 8.0], [42.3, 8.0], [42.4, 8.0], [42.5, 8.0], [42.6, 8.0], [42.7, 8.0], [42.8, 8.0], [42.9, 8.0], [43.0, 8.0], [43.1, 8.0], [43.2, 8.0], [43.3, 8.0], [43.4, 8.0], [43.5, 8.0], [43.6, 8.0], [43.7, 8.0], [43.8, 8.0], [43.9, 8.0], [44.0, 8.0], [44.1, 8.0], [44.2, 8.0], [44.3, 8.0], [44.4, 8.0], [44.5, 8.0], [44.6, 8.0], [44.7, 8.0], [44.8, 8.0], [44.9, 8.0], [45.0, 8.0], [45.1, 8.0], [45.2, 8.0], [45.3, 8.0], [45.4, 8.0], [45.5, 8.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 9.0], [46.3, 9.0], [46.4, 9.0], [46.5, 9.0], [46.6, 9.0], [46.7, 9.0], [46.8, 9.0], [46.9, 9.0], [47.0, 9.0], [47.1, 9.0], [47.2, 9.0], [47.3, 9.0], [47.4, 9.0], [47.5, 9.0], [47.6, 9.0], [47.7, 9.0], [47.8, 9.0], [47.9, 9.0], [48.0, 9.0], [48.1, 9.0], [48.2, 9.0], [48.3, 9.0], [48.4, 9.0], [48.5, 9.0], [48.6, 9.0], [48.7, 9.0], [48.8, 9.0], [48.9, 9.0], [49.0, 9.0], [49.1, 9.0], [49.2, 9.0], [49.3, 9.0], [49.4, 9.0], [49.5, 9.0], [49.6, 9.0], [49.7, 9.0], [49.8, 9.0], [49.9, 9.0], [50.0, 9.0], [50.1, 9.0], [50.2, 9.0], [50.3, 10.0], [50.4, 10.0], [50.5, 10.0], [50.6, 10.0], [50.7, 10.0], [50.8, 10.0], [50.9, 10.0], [51.0, 10.0], [51.1, 10.0], [51.2, 10.0], [51.3, 10.0], [51.4, 10.0], [51.5, 10.0], [51.6, 10.0], [51.7, 10.0], [51.8, 10.0], [51.9, 10.0], [52.0, 10.0], [52.1, 10.0], [52.2, 10.0], [52.3, 10.0], [52.4, 10.0], [52.5, 10.0], [52.6, 10.0], [52.7, 10.0], [52.8, 10.0], [52.9, 10.0], [53.0, 10.0], [53.1, 10.0], [53.2, 10.0], [53.3, 10.0], [53.4, 10.0], [53.5, 10.0], [53.6, 10.0], [53.7, 10.0], [53.8, 10.0], [53.9, 10.0], [54.0, 10.0], [54.1, 10.0], [54.2, 10.0], [54.3, 11.0], [54.4, 11.0], [54.5, 11.0], [54.6, 11.0], [54.7, 11.0], [54.8, 11.0], [54.9, 11.0], [55.0, 11.0], [55.1, 11.0], [55.2, 11.0], [55.3, 11.0], [55.4, 11.0], [55.5, 11.0], [55.6, 11.0], [55.7, 11.0], [55.8, 11.0], [55.9, 11.0], [56.0, 11.0], [56.1, 11.0], [56.2, 11.0], [56.3, 11.0], [56.4, 11.0], [56.5, 11.0], [56.6, 11.0], [56.7, 11.0], [56.8, 11.0], [56.9, 11.0], [57.0, 11.0], [57.1, 11.0], [57.2, 11.0], [57.3, 11.0], [57.4, 11.0], [57.5, 11.0], [57.6, 11.0], [57.7, 11.0], [57.8, 11.0], [57.9, 12.0], [58.0, 12.0], [58.1, 12.0], [58.2, 12.0], [58.3, 12.0], [58.4, 12.0], [58.5, 12.0], [58.6, 12.0], [58.7, 12.0], [58.8, 12.0], [58.9, 12.0], [59.0, 12.0], [59.1, 12.0], [59.2, 12.0], [59.3, 12.0], [59.4, 12.0], [59.5, 12.0], [59.6, 12.0], [59.7, 12.0], [59.8, 12.0], [59.9, 12.0], [60.0, 12.0], [60.1, 12.0], [60.2, 12.0], [60.3, 12.0], [60.4, 12.0], [60.5, 12.0], [60.6, 12.0], [60.7, 12.0], [60.8, 12.0], [60.9, 12.0], [61.0, 12.0], [61.1, 12.0], [61.2, 12.0], [61.3, 13.0], [61.4, 13.0], [61.5, 13.0], [61.6, 13.0], [61.7, 13.0], [61.8, 13.0], [61.9, 13.0], [62.0, 13.0], [62.1, 13.0], [62.2, 13.0], [62.3, 13.0], [62.4, 13.0], [62.5, 13.0], [62.6, 13.0], [62.7, 13.0], [62.8, 13.0], [62.9, 13.0], [63.0, 13.0], [63.1, 13.0], [63.2, 13.0], [63.3, 13.0], [63.4, 13.0], [63.5, 13.0], [63.6, 13.0], [63.7, 13.0], [63.8, 13.0], [63.9, 13.0], [64.0, 13.0], [64.1, 13.0], [64.2, 13.0], [64.3, 13.0], [64.4, 14.0], [64.5, 14.0], [64.6, 14.0], [64.7, 14.0], [64.8, 14.0], [64.9, 14.0], [65.0, 14.0], [65.1, 14.0], [65.2, 14.0], [65.3, 14.0], [65.4, 14.0], [65.5, 14.0], [65.6, 14.0], [65.7, 14.0], [65.8, 14.0], [65.9, 14.0], [66.0, 14.0], [66.1, 14.0], [66.2, 14.0], [66.3, 14.0], [66.4, 14.0], [66.5, 14.0], [66.6, 14.0], [66.7, 14.0], [66.8, 14.0], [66.9, 14.0], [67.0, 14.0], [67.1, 14.0], [67.2, 14.0], [67.3, 15.0], [67.4, 15.0], [67.5, 15.0], [67.6, 15.0], [67.7, 15.0], [67.8, 15.0], [67.9, 15.0], [68.0, 15.0], [68.1, 15.0], [68.2, 15.0], [68.3, 15.0], [68.4, 15.0], [68.5, 15.0], [68.6, 15.0], [68.7, 15.0], [68.8, 15.0], [68.9, 15.0], [69.0, 15.0], [69.1, 15.0], [69.2, 15.0], [69.3, 15.0], [69.4, 15.0], [69.5, 15.0], [69.6, 16.0], [69.7, 16.0], [69.8, 16.0], [69.9, 16.0], [70.0, 16.0], [70.1, 16.0], [70.2, 16.0], [70.3, 16.0], [70.4, 16.0], [70.5, 16.0], [70.6, 16.0], [70.7, 16.0], [70.8, 16.0], [70.9, 16.0], [71.0, 16.0], [71.1, 16.0], [71.2, 16.0], [71.3, 16.0], [71.4, 16.0], [71.5, 16.0], [71.6, 16.0], [71.7, 17.0], [71.8, 17.0], [71.9, 17.0], [72.0, 17.0], [72.1, 17.0], [72.2, 17.0], [72.3, 17.0], [72.4, 17.0], [72.5, 17.0], [72.6, 17.0], [72.7, 17.0], [72.8, 17.0], [72.9, 17.0], [73.0, 17.0], [73.1, 17.0], [73.2, 17.0], [73.3, 17.0], [73.4, 18.0], [73.5, 18.0], [73.6, 18.0], [73.7, 18.0], [73.8, 18.0], [73.9, 18.0], [74.0, 18.0], [74.1, 18.0], [74.2, 18.0], [74.3, 18.0], [74.4, 18.0], [74.5, 18.0], [74.6, 18.0], [74.7, 18.0], [74.8, 18.0], [74.9, 19.0], [75.0, 19.0], [75.1, 19.0], [75.2, 19.0], [75.3, 19.0], [75.4, 19.0], [75.5, 19.0], [75.6, 19.0], [75.7, 19.0], [75.8, 19.0], [75.9, 19.0], [76.0, 19.0], [76.1, 20.0], [76.2, 20.0], [76.3, 20.0], [76.4, 20.0], [76.5, 20.0], [76.6, 20.0], [76.7, 20.0], [76.8, 20.0], [76.9, 20.0], [77.0, 20.0], [77.1, 20.0], [77.2, 20.0], [77.3, 21.0], [77.4, 21.0], [77.5, 21.0], [77.6, 21.0], [77.7, 21.0], [77.8, 21.0], [77.9, 21.0], [78.0, 21.0], [78.1, 21.0], [78.2, 22.0], [78.3, 22.0], [78.4, 22.0], [78.5, 22.0], [78.6, 22.0], [78.7, 22.0], [78.8, 22.0], [78.9, 22.0], [79.0, 23.0], [79.1, 23.0], [79.2, 23.0], [79.3, 23.0], [79.4, 23.0], [79.5, 23.0], [79.6, 23.0], [79.7, 24.0], [79.8, 24.0], [79.9, 24.0], [80.0, 24.0], [80.1, 24.0], [80.2, 24.0], [80.3, 24.0], [80.4, 25.0], [80.5, 25.0], [80.6, 25.0], [80.7, 25.0], [80.8, 25.0], [80.9, 25.0], [81.0, 26.0], [81.1, 26.0], [81.2, 26.0], [81.3, 26.0], [81.4, 26.0], [81.5, 26.0], [81.6, 27.0], [81.7, 27.0], [81.8, 27.0], [81.9, 27.0], [82.0, 28.0], [82.1, 28.0], [82.2, 28.0], [82.3, 28.0], [82.4, 29.0], [82.5, 29.0], [82.6, 29.0], [82.7, 29.0], [82.8, 30.0], [82.9, 30.0], [83.0, 31.0], [83.1, 31.0], [83.2, 31.0], [83.3, 32.0], [83.4, 32.0], [83.5, 32.0], [83.6, 33.0], [83.7, 34.0], [83.8, 34.0], [83.9, 35.0], [84.0, 35.0], [84.1, 36.0], [84.2, 37.0], [84.3, 38.0], [84.4, 38.0], [84.5, 39.0], [84.6, 40.0], [84.7, 41.0], [84.8, 42.0], [84.9, 43.0], [85.0, 44.0], [85.1, 46.0], [85.2, 48.0], [85.3, 49.0], [85.4, 52.0], [85.5, 54.0], [85.6, 56.0], [85.7, 59.0], [85.8, 62.0], [85.9, 67.0], [86.0, 73.0], [86.1, 79.0], [86.2, 89.0], [86.3, 111.0], [86.4, 140.0], [86.5, 197.0], [86.6, 265.0], [86.7, 342.0], [86.8, 430.0], [86.9, 539.0], [87.0, 570.0], [87.1, 599.0], [87.2, 649.0], [87.3, 704.0], [87.4, 779.0], [87.5, 808.0], [87.6, 828.0], [87.7, 844.0], [87.8, 856.0], [87.9, 873.0], [88.0, 889.0], [88.1, 901.0], [88.2, 909.0], [88.3, 920.0], [88.4, 939.0], [88.5, 958.0], [88.6, 967.0], [88.7, 981.0], [88.8, 991.0], [88.9, 1002.0], [89.0, 1015.0], [89.1, 1027.0], [89.2, 1043.0], [89.3, 1061.0], [89.4, 1079.0], [89.5, 1104.0], [89.6, 1125.0], [89.7, 1144.0], [89.8, 1185.0], [89.9, 1211.0], [90.0, 1257.0], [90.1, 1300.0], [90.2, 1405.0], [90.3, 1645.0], [90.4, 1761.0], [90.5, 1861.0], [90.6, 2114.0], [90.7, 2241.0], [90.8, 2376.0], [90.9, 2543.0], [91.0, 2830.0], [91.1, 2892.0], [91.2, 2985.0], [91.3, 3180.0], [91.4, 3329.0], [91.5, 3463.0], [91.6, 3563.0], [91.7, 3586.0], [91.8, 3623.0], [91.9, 3642.0], [92.0, 3691.0], [92.1, 3746.0], [92.2, 3824.0], [92.3, 3909.0], [92.4, 3967.0], [92.5, 4011.0], [92.6, 4040.0], [92.7, 4090.0], [92.8, 4155.0], [92.9, 4175.0], [93.0, 4190.0], [93.1, 4214.0], [93.2, 4263.0], [93.3, 4271.0], [93.4, 4282.0], [93.5, 4294.0], [93.6, 4306.0], [93.7, 4324.0], [93.8, 4365.0], [93.9, 4374.0], [94.0, 4384.0], [94.1, 4394.0], [94.2, 4412.0], [94.3, 4445.0], [94.4, 4455.0], [94.5, 4461.0], [94.6, 4471.0], [94.7, 4482.0], [94.8, 4492.0], [94.9, 4528.0], [95.0, 4549.0], [95.1, 4578.0], [95.2, 4592.0], [95.3, 4618.0], [95.4, 4636.0], [95.5, 4665.0], [95.6, 4681.0], [95.7, 4693.0], [95.8, 4711.0], [95.9, 4726.0], [96.0, 4733.0], [96.1, 4759.0], [96.2, 4795.0], [96.3, 4865.0], [96.4, 4893.0], [96.5, 4906.0], [96.6, 4959.0], [96.7, 4974.0], [96.8, 4993.0], [96.9, 5049.0], [97.0, 5087.0], [97.1, 5124.0], [97.2, 5176.0], [97.3, 5206.0], [97.4, 5219.0], [97.5, 5240.0], [97.6, 5253.0], [97.7, 5290.0], [97.8, 5318.0], [97.9, 5388.0], [98.0, 5403.0], [98.1, 5462.0], [98.2, 5482.0], [98.3, 5569.0], [98.4, 5653.0], [98.5, 5674.0], [98.6, 5803.0], [98.7, 5912.0], [98.8, 6092.0], [98.9, 6177.0], [99.0, 6467.0], [99.1, 6752.0], [99.2, 6921.0], [99.3, 7133.0], [99.4, 7300.0], [99.5, 7553.0], [99.6, 8168.0], [99.7, 8697.0], [99.8, 10794.0], [99.9, 11751.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 43124.0, "series": [{"data": [[0.0, 43124.0], [100.0, 130.0], [200.0, 66.0], [300.0, 64.0], [400.0, 38.0], [500.0, 129.0], [600.0, 92.0], [700.0, 87.0], [800.0, 311.0], [900.0, 396.0], [1000.0, 301.0], [1100.0, 188.0], [1200.0, 124.0], [1300.0, 50.0], [1400.0, 15.0], [1500.0, 20.0], [1600.0, 37.0], [1700.0, 47.0], [1800.0, 32.0], [1900.0, 20.0], [2000.0, 18.0], [2100.0, 26.0], [2200.0, 46.0], [2300.0, 47.0], [2400.0, 36.0], [2500.0, 15.0], [2600.0, 8.0], [2800.0, 76.0], [2700.0, 8.0], [2900.0, 59.0], [3000.0, 9.0], [3100.0, 39.0], [3300.0, 47.0], [3200.0, 29.0], [3400.0, 35.0], [3500.0, 117.0], [3600.0, 137.0], [3700.0, 70.0], [3800.0, 39.0], [3900.0, 103.0], [4000.0, 121.0], [4300.0, 314.0], [4100.0, 170.0], [4200.0, 237.0], [4500.0, 199.0], [4400.0, 346.0], [4600.0, 237.0], [4700.0, 243.0], [4800.0, 129.0], [5100.0, 112.0], [4900.0, 180.0], [5000.0, 126.0], [5200.0, 222.0], [5300.0, 126.0], [5400.0, 109.0], [5500.0, 50.0], [5600.0, 116.0], [5800.0, 36.0], [5700.0, 27.0], [5900.0, 38.0], [6000.0, 58.0], [6100.0, 25.0], [6200.0, 31.0], [6300.0, 7.0], [6600.0, 17.0], [6400.0, 7.0], [6500.0, 24.0], [6700.0, 27.0], [6900.0, 45.0], [6800.0, 12.0], [7000.0, 21.0], [7100.0, 36.0], [7200.0, 17.0], [7400.0, 34.0], [7300.0, 8.0], [7500.0, 11.0], [7600.0, 3.0], [7700.0, 3.0], [7800.0, 2.0], [7900.0, 6.0], [8100.0, 25.0], [8000.0, 18.0], [8200.0, 2.0], [8500.0, 1.0], [8700.0, 11.0], [8300.0, 3.0], [8400.0, 6.0], [8600.0, 31.0], [8900.0, 2.0], [9100.0, 1.0], [9400.0, 5.0], [9600.0, 4.0], [9900.0, 10.0], [9800.0, 2.0], [10700.0, 13.0], [11200.0, 14.0], [10900.0, 5.0], [11000.0, 11.0], [11100.0, 2.0], [10800.0, 13.0], [11700.0, 8.0], [11900.0, 2.0], [12600.0, 36.0], [13100.0, 1.0], [13400.0, 2.0], [13700.0, 5.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 193.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 43462.0, "series": [{"data": [[0.0, 193.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1640.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4705.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 43462.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 14.123711340206205, "minX": 1.57493544E12, "maxY": 181.82688958550975, "series": [{"data": [[1.57493568E12, 14.123711340206205], [1.57493556E12, 181.82688958550975], [1.57493544E12, 22.218934911242602], [1.57493562E12, 111.86886632825826], [1.5749355E12, 178.69095005632755]], "isOverall": false, "label": "1. Save API", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493568E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.2162162162162167, "minX": 1.0, "maxY": 2889.75, "series": [{"data": [[2.0, 28.285714285714285], [3.0, 12.305555555555557], [4.0, 102.33333333333334], [5.0, 173.88235294117644], [6.0, 39.304878048780495], [7.0, 40.38461538461538], [8.0, 28.35714285714286], [9.0, 42.103448275862085], [10.0, 85.2015503875969], [11.0, 503.21428571428567], [12.0, 58.20454545454545], [13.0, 24.8695652173913], [14.0, 169.2], [15.0, 33.888888888888886], [16.0, 22.12676056338027], [17.0, 172.90476190476187], [18.0, 107.62068965517243], [19.0, 15.084745762711854], [20.0, 52.786407766990294], [21.0, 253.0105263157895], [22.0, 772.9599999999999], [23.0, 901.695652173913], [24.0, 55.250000000000014], [25.0, 91.66666666666666], [26.0, 924.2844036697248], [27.0, 1118.9729729729731], [28.0, 1238.6999999999998], [29.0, 629.1818181818181], [30.0, 579.2941176470587], [31.0, 787.1451612903224], [32.0, 934.871886120996], [33.0, 921.5169082125603], [34.0, 964.0090090090091], [35.0, 1031.8372093023258], [37.0, 1160.5], [36.0, 1112.9285714285716], [38.0, 1431.383966244726], [39.0, 446.9607843137256], [40.0, 121.62999999999995], [41.0, 4.727272727272727], [42.0, 217.25000000000003], [43.0, 75.63157894736842], [44.0, 118.13333333333337], [45.0, 91.0529100529101], [46.0, 29.19767441860465], [47.0, 36.89285714285714], [49.0, 8.866666666666667], [48.0, 6.7272727272727275], [51.0, 8.157894736842106], [50.0, 70.34893617021282], [52.0, 684.4], [53.0, 240.5534883720931], [55.0, 11.39148936170213], [54.0, 7.880597014925374], [56.0, 257.9902912621359], [57.0, 53.86000000000001], [58.0, 176.69999999999993], [59.0, 400.1797752808989], [61.0, 204.14814814814812], [60.0, 97.72], [63.0, 36.55648535564854], [62.0, 5.532544378698225], [64.0, 426.1333333333334], [67.0, 138.4761904761905], [66.0, 3.659340659340659], [65.0, 343.89199999999994], [68.0, 158.75], [69.0, 711.3064516129033], [71.0, 198.23076923076914], [70.0, 3.6393442622950833], [72.0, 842.6862745098039], [73.0, 1167.857142857143], [74.0, 2889.75], [75.0, 46.281250000000014], [79.0, 2.6666666666666665], [78.0, 3.080645161290322], [77.0, 1.2162162162162167], [76.0, 201.83749999999998], [80.0, 901.6341463414637], [83.0, 3.375], [82.0, 4.290909090909093], [81.0, 3.3125], [84.0, 48.18571428571427], [85.0, 347.58474576271175], [87.0, 114.81355932203385], [86.0, 5.341772151898735], [88.0, 35.81889763779523], [91.0, 22.21459227467811], [90.0, 564.2888888888886], [89.0, 8.105263157894736], [92.0, 415.3428571428573], [95.0, 11.855855855855854], [94.0, 3.1578947368421044], [93.0, 2.75], [97.0, 25.78666666666665], [98.0, 107.67874794069185], [99.0, 9.69230769230769], [96.0, 15.864705882352945], [103.0, 772.545454545455], [101.0, 13.333333333333334], [100.0, 1975.3831775700935], [104.0, 297.07142857142856], [107.0, 101.6666666666667], [106.0, 6.876470588235296], [105.0, 5.732558139534883], [110.0, 349.0055865921786], [111.0, 7.171428571428571], [109.0, 13.6374269005848], [108.0, 7.956521739130434], [112.0, 167.2232142857143], [115.0, 6.935779816513759], [114.0, 5.794871794871795], [113.0, 10.142857142857139], [117.0, 17.798525798525766], [118.0, 91.53846153846155], [119.0, 345.48876404494376], [116.0, 10.407407407407407], [122.0, 62.780000000000015], [123.0, 32.8801369863014], [121.0, 9.735751295336776], [120.0, 12.891304347826086], [125.0, 348.2049180327869], [126.0, 882.8695652173914], [127.0, 161.1305841924399], [124.0, 1145.4343749999994], [132.0, 142.00314465408786], [133.0, 127.74038461538484], [135.0, 382.35075653370046], [134.0, 1732.7485380116952], [131.0, 14.153529666522251], [130.0, 10.111111111111105], [129.0, 478.31334622824005], [128.0, 13.188396349413297], [140.0, 46.145695364238414], [142.0, 1262.1267605633802], [143.0, 9.383458646616543], [141.0, 8.071428571428578], [139.0, 2.641509433962265], [138.0, 1.7407407407407407], [136.0, 2.2222222222222223], [147.0, 57.70689655172413], [150.0, 401.2587412587412], [151.0, 10.294117647058819], [149.0, 7.0], [148.0, 9.434285714285709], [146.0, 8.96931659693166], [145.0, 12.15986769570012], [144.0, 4.787878787878787], [155.0, 1972.4062499999998], [159.0, 3.894736842105262], [158.0, 3.0833333333333335], [157.0, 5.878612716763009], [156.0, 6.000000000000002], [154.0, 25.999999999999996], [153.0, 832.5374149659868], [152.0, 11.517341040462426], [162.0, 761.2307692307688], [167.0, 15.102941176470592], [166.0, 8.723214285714288], [165.0, 9.819354838709684], [164.0, 10.215909090909088], [163.0, 12.471264367816094], [161.0, 8.017543859649123], [160.0, 11.340659340659334], [168.0, 143.30343511450386], [170.0, 666.2727272727274], [171.0, 74.85342019543981], [175.0, 17.883789785344156], [174.0, 16.241164241164253], [173.0, 22.016129032258064], [172.0, 21.014925373134332], [169.0, 10.933333333333334], [178.0, 420.34294871794845], [183.0, 969.857142857143], [182.0, 1089.5823662396401], [181.0, 12.4], [180.0, 11.529661016949156], [179.0, 20.775124378109453], [177.0, 12.61904761904762], [176.0, 13.146153846153842], [186.0, 1546.46511627907], [190.0, 702.0666666666666], [191.0, 3.9736842105263155], [189.0, 2.555555555555556], [188.0, 3.4583333333333335], [187.0, 3.5], [185.0, 1.5], [184.0, 2.5], [194.0, 249.40243902439028], [198.0, 3.6], [197.0, 19.0], [196.0, 21.7], [195.0, 16.700000000000003], [193.0, 3.5], [192.0, 4.343749999999998], [200.0, 1729.005772005758], [1.0, 40.90909090909091]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}, {"data": [[141.15784000000087, 510.7171999999971]], "isOverall": false, "label": "Save API HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 808.3833333333333, "minX": 1.57493544E12, "maxY": 1036345.8, "series": [{"data": [[1.57493568E12, 36071.01666666667], [1.57493556E12, 778472.7], [1.57493544E12, 808.3833333333333], [1.57493562E12, 1036345.8], [1.5749355E12, 12738.016666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57493568E12, 67103.23333333334], [1.57493556E12, 518856.8], [1.57493544E12, 47449.566666666666], [1.57493562E12, 454561.23333333334], [1.5749355E12, 747681.6333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493568E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 148.7066541705715, "minX": 1.57493544E12, "maxY": 3840.3304543747713, "series": [{"data": [[1.57493568E12, 148.7066541705715], [1.57493556E12, 541.6505946161095], [1.57493544E12, 440.0177514792901], [1.57493562E12, 161.1473234886942], [1.5749355E12, 3840.3304543747713]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493568E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 146.61949390815366, "minX": 1.57493544E12, "maxY": 3840.32594817875, "series": [{"data": [[1.57493568E12, 146.61949390815366], [1.57493556E12, 469.6313380106514], [1.57493544E12, 440.0177514792901], [1.57493562E12, 148.99826949700093], [1.5749355E12, 3840.32594817875]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493568E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.18934911242603555, "minX": 1.57493544E12, "maxY": 31.210528934667042, "series": [{"data": [[1.57493568E12, 2.1040299906279243], [1.57493556E12, 31.210528934667042], [1.57493544E12, 0.18934911242603555], [1.57493562E12, 14.656168281802875], [1.5749355E12, 0.4904243334585055]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493568E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 19.0, "minX": 1.57493544E12, "maxY": 13776.0, "series": [{"data": [[1.57493568E12, 1462.0], [1.57493556E12, 8697.0], [1.57493544E12, 982.0], [1.57493562E12, 13776.0], [1.5749355E12, 5939.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57493568E12, 30.0], [1.57493556E12, 2536.0], [1.57493544E12, 19.0], [1.57493562E12, 532.0], [1.5749355E12, 542.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57493568E12, 1177.0], [1.57493556E12, 6536.200000000001], [1.57493544E12, 744.0], [1.57493562E12, 6276.0], [1.5749355E12, 5241.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57493568E12, 1454.8], [1.57493556E12, 8682.0], [1.57493544E12, 965.2000000000003], [1.57493562E12, 12676.0], [1.5749355E12, 5802.360000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57493568E12, 1215.0], [1.57493556E12, 7088.55], [1.57493544E12, 822.5], [1.57493562E12, 11000.0], [1.5749355E12, 5462.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493568E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 13481.5, "series": [{"data": [[2.0, 2842.5], [614.0, 5537.0], [725.0, 6991.0], [920.0, 4936.0], [907.0, 9973.5], [1010.0, 4562.0], [992.0, 3574.0], [4.0, 4662.0], [1287.0, 11008.0], [1285.0, 5285.0], [1311.0, 4586.0], [1383.0, 12650.5], [1502.0, 8683.0], [6.0, 4865.0], [1788.0, 7415.0], [1728.0, 8664.5], [7.0, 5617.0], [1863.0, 5213.0], [1957.0, 13481.5], [8.0, 4158.5], [2207.0, 5256.0], [2213.0, 6183.0], [9.0, 1190.0], [2511.0, 10889.0], [10.0, 40.0], [14.0, 4394.5], [15.0, 914.0], [16.0, 3200.5], [17.0, 5163.0], [18.0, 4662.0], [19.0, 4261.0], [20.0, 4513.5], [21.0, 4639.0], [22.0, 5816.0], [23.0, 2512.5], [24.0, 4257.0], [25.0, 972.0], [26.0, 1107.5], [27.0, 2173.5], [28.0, 4445.0], [30.0, 4603.0], [31.0, 959.0], [33.0, 1434.0], [32.0, 1005.0], [35.0, 1141.0], [34.0, 982.5], [37.0, 5004.5], [36.0, 3883.5], [38.0, 1196.0], [39.0, 4732.0], [40.0, 4988.5], [41.0, 751.0], [43.0, 2828.0], [42.0, 2964.0], [44.0, 2479.0], [45.0, 4050.0], [46.0, 4450.0], [47.0, 2234.0], [48.0, 4013.5], [49.0, 3583.0], [50.0, 4549.5], [51.0, 6934.0], [53.0, 4283.0], [54.0, 2767.5], [55.0, 872.0], [57.0, 6095.0], [59.0, 4666.0], [60.0, 4584.0], [61.0, 4525.0], [62.0, 2425.5], [65.0, 4316.0], [67.0, 3989.0], [64.0, 5170.0], [66.0, 5289.0], [69.0, 4311.0], [70.0, 4975.5], [71.0, 4592.0], [73.0, 5178.0], [74.0, 1199.0], [78.0, 3912.0], [87.0, 4546.0], [85.0, 4759.0], [86.0, 4892.5], [88.0, 45.0], [94.0, 5048.5], [104.0, 4906.0], [1.0, 4529.0], [266.0, 7963.0], [269.0, 323.0], [273.0, 2892.0], [454.0, 654.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[614.0, 2.0], [725.0, 5.0], [47.0, 7545.0], [920.0, 5.0], [907.0, 3.0], [1010.0, 14.0], [992.0, 4.0], [67.0, 2.0], [74.0, 2.0], [1310.0, 9.0], [1287.0, 7.0], [1285.0, 3.0], [1311.0, 4.0], [1383.0, 12.0], [86.0, 5.0], [1440.0, 13.0], [88.0, 1.0], [1502.0, 9.0], [1563.0, 6.0], [1577.0, 9.0], [104.0, 2.0], [1788.0, 5.0], [1737.0, 6.0], [111.0, 7298.0], [1728.0, 9.0], [1778.0, 7.0], [1863.0, 11.0], [1957.0, 7.0], [2022.0, 13.0], [2235.0, 6.0], [2207.0, 10.0], [2213.0, 8.0], [2373.0, 13.0], [2511.0, 16.0], [266.0, 5.0], [269.0, 2.0], [273.0, 3.0], [454.0, 1.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2511.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 13481.5, "series": [{"data": [[2.0, 2842.5], [614.0, 5537.0], [725.0, 6991.0], [920.0, 4936.0], [907.0, 9973.5], [1010.0, 4562.0], [992.0, 3574.0], [4.0, 4662.0], [1287.0, 11008.0], [1285.0, 5285.0], [1311.0, 4586.0], [1383.0, 12650.5], [1502.0, 8683.0], [6.0, 4865.0], [1788.0, 7415.0], [1728.0, 8664.5], [7.0, 5617.0], [1863.0, 5213.0], [1957.0, 13481.5], [8.0, 4158.5], [2207.0, 5256.0], [2213.0, 6183.0], [9.0, 1190.0], [2511.0, 10889.0], [10.0, 40.0], [14.0, 4394.5], [15.0, 914.0], [16.0, 3200.5], [17.0, 5163.0], [18.0, 4662.0], [19.0, 4261.0], [20.0, 4513.5], [21.0, 4639.0], [22.0, 5816.0], [23.0, 2512.5], [24.0, 4257.0], [25.0, 972.0], [26.0, 1107.5], [27.0, 2173.5], [28.0, 4445.0], [30.0, 4603.0], [31.0, 959.0], [33.0, 1434.0], [32.0, 1005.0], [35.0, 1141.0], [34.0, 982.5], [37.0, 5004.5], [36.0, 3883.5], [38.0, 1196.0], [39.0, 4732.0], [40.0, 4988.5], [41.0, 751.0], [43.0, 2828.0], [42.0, 2964.0], [44.0, 2479.0], [45.0, 4050.0], [46.0, 4450.0], [47.0, 2234.0], [48.0, 4013.5], [49.0, 3583.0], [50.0, 4549.5], [51.0, 6934.0], [53.0, 4283.0], [54.0, 2767.5], [55.0, 872.0], [57.0, 6095.0], [59.0, 4666.0], [60.0, 4584.0], [61.0, 4525.0], [62.0, 2425.5], [65.0, 4316.0], [67.0, 3989.0], [64.0, 5170.0], [66.0, 5289.0], [69.0, 4311.0], [70.0, 4975.5], [71.0, 4592.0], [73.0, 5178.0], [74.0, 1199.0], [78.0, 3912.0], [87.0, 4546.0], [85.0, 4759.0], [86.0, 4892.5], [88.0, 45.0], [94.0, 5048.5], [104.0, 4906.0], [1.0, 4529.0], [266.0, 7963.0], [269.0, 323.0], [273.0, 2892.0], [454.0, 654.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[614.0, 0.0], [725.0, 0.0], [47.0, 0.0], [920.0, 0.0], [907.0, 0.0], [1010.0, 0.0], [992.0, 0.0], [67.0, 0.0], [74.0, 0.0], [1310.0, 0.0], [1287.0, 0.0], [1285.0, 0.0], [1311.0, 0.0], [1383.0, 0.0], [86.0, 0.0], [1440.0, 0.0], [88.0, 0.0], [1502.0, 0.0], [1563.0, 0.0], [1577.0, 0.0], [104.0, 0.0], [1788.0, 0.0], [1737.0, 0.0], [111.0, 0.0], [1728.0, 0.0], [1778.0, 0.0], [1863.0, 0.0], [1957.0, 0.0], [2022.0, 0.0], [2235.0, 0.0], [2207.0, 0.0], [2213.0, 0.0], [2373.0, 0.0], [2511.0, 0.0], [266.0, 0.0], [269.0, 0.0], [273.0, 0.0], [454.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2511.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.533333333333333, "minX": 1.57493544E12, "maxY": 431.3666666666667, "series": [{"data": [[1.57493568E12, 17.35], [1.57493556E12, 334.0833333333333], [1.57493544E12, 3.533333333333333], [1.57493562E12, 431.3666666666667], [1.5749355E12, 47.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493568E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.6, "minX": 1.57493544E12, "maxY": 405.81666666666666, "series": [{"data": [[1.57493568E12, 3.9833333333333334], [1.57493556E12, 30.8], [1.57493544E12, 2.816666666666667], [1.57493562E12, 26.983333333333334], [1.5749355E12, 44.38333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57493568E12, 13.8], [1.57493556E12, 301.4], [1.57493562E12, 405.81666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}, {"data": [[1.57493556E12, 2.75], [1.57493562E12, 0.6]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493568E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.816666666666667, "minX": 1.57493544E12, "maxY": 406.4166666666667, "series": [{"data": [[1.57493568E12, 13.8], [1.57493556E12, 304.15], [1.57493562E12, 406.4166666666667]], "isOverall": false, "label": "Save API HTTP Request-failure", "isController": false}, {"data": [[1.57493568E12, 3.9833333333333334], [1.57493556E12, 30.8], [1.57493544E12, 2.816666666666667], [1.57493562E12, 26.983333333333334], [1.5749355E12, 44.38333333333333]], "isOverall": false, "label": "Save API HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493568E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.816666666666667, "minX": 1.57493544E12, "maxY": 406.4166666666667, "series": [{"data": [[1.57493568E12, 3.9833333333333334], [1.57493556E12, 30.8], [1.57493544E12, 2.816666666666667], [1.57493562E12, 26.983333333333334], [1.5749355E12, 44.38333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57493568E12, 13.8], [1.57493556E12, 304.15], [1.57493562E12, 406.4166666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493568E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

