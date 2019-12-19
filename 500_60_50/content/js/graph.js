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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 24762.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 3.0], [14.3, 3.0], [14.4, 3.0], [14.5, 3.0], [14.6, 3.0], [14.7, 3.0], [14.8, 3.0], [14.9, 3.0], [15.0, 3.0], [15.1, 3.0], [15.2, 3.0], [15.3, 3.0], [15.4, 3.0], [15.5, 3.0], [15.6, 3.0], [15.7, 3.0], [15.8, 3.0], [15.9, 3.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 5.0], [16.6, 5.0], [16.7, 5.0], [16.8, 6.0], [16.9, 6.0], [17.0, 6.0], [17.1, 6.0], [17.2, 7.0], [17.3, 7.0], [17.4, 7.0], [17.5, 7.0], [17.6, 8.0], [17.7, 8.0], [17.8, 9.0], [17.9, 9.0], [18.0, 9.0], [18.1, 10.0], [18.2, 10.0], [18.3, 11.0], [18.4, 11.0], [18.5, 11.0], [18.6, 12.0], [18.7, 12.0], [18.8, 13.0], [18.9, 13.0], [19.0, 14.0], [19.1, 14.0], [19.2, 14.0], [19.3, 15.0], [19.4, 15.0], [19.5, 16.0], [19.6, 16.0], [19.7, 17.0], [19.8, 17.0], [19.9, 18.0], [20.0, 18.0], [20.1, 19.0], [20.2, 19.0], [20.3, 19.0], [20.4, 20.0], [20.5, 20.0], [20.6, 20.0], [20.7, 21.0], [20.8, 21.0], [20.9, 22.0], [21.0, 22.0], [21.1, 22.0], [21.2, 23.0], [21.3, 23.0], [21.4, 23.0], [21.5, 24.0], [21.6, 24.0], [21.7, 25.0], [21.8, 25.0], [21.9, 26.0], [22.0, 26.0], [22.1, 27.0], [22.2, 27.0], [22.3, 27.0], [22.4, 28.0], [22.5, 29.0], [22.6, 29.0], [22.7, 30.0], [22.8, 30.0], [22.9, 31.0], [23.0, 31.0], [23.1, 32.0], [23.2, 32.0], [23.3, 33.0], [23.4, 34.0], [23.5, 35.0], [23.6, 36.0], [23.7, 36.0], [23.8, 37.0], [23.9, 37.0], [24.0, 38.0], [24.1, 38.0], [24.2, 39.0], [24.3, 39.0], [24.4, 40.0], [24.5, 40.0], [24.6, 40.0], [24.7, 40.0], [24.8, 41.0], [24.9, 41.0], [25.0, 42.0], [25.1, 43.0], [25.2, 43.0], [25.3, 44.0], [25.4, 45.0], [25.5, 45.0], [25.6, 46.0], [25.7, 47.0], [25.8, 47.0], [25.9, 47.0], [26.0, 48.0], [26.1, 48.0], [26.2, 48.0], [26.3, 49.0], [26.4, 50.0], [26.5, 50.0], [26.6, 51.0], [26.7, 52.0], [26.8, 52.0], [26.9, 53.0], [27.0, 53.0], [27.1, 53.0], [27.2, 54.0], [27.3, 54.0], [27.4, 54.0], [27.5, 55.0], [27.6, 55.0], [27.7, 56.0], [27.8, 56.0], [27.9, 56.0], [28.0, 57.0], [28.1, 57.0], [28.2, 58.0], [28.3, 59.0], [28.4, 59.0], [28.5, 60.0], [28.6, 60.0], [28.7, 60.0], [28.8, 61.0], [28.9, 61.0], [29.0, 62.0], [29.1, 62.0], [29.2, 62.0], [29.3, 62.0], [29.4, 63.0], [29.5, 63.0], [29.6, 63.0], [29.7, 64.0], [29.8, 64.0], [29.9, 65.0], [30.0, 65.0], [30.1, 66.0], [30.2, 67.0], [30.3, 67.0], [30.4, 68.0], [30.5, 69.0], [30.6, 70.0], [30.7, 70.0], [30.8, 71.0], [30.9, 71.0], [31.0, 71.0], [31.1, 72.0], [31.2, 73.0], [31.3, 74.0], [31.4, 74.0], [31.5, 75.0], [31.6, 75.0], [31.7, 76.0], [31.8, 76.0], [31.9, 77.0], [32.0, 77.0], [32.1, 77.0], [32.2, 77.0], [32.3, 78.0], [32.4, 78.0], [32.5, 78.0], [32.6, 78.0], [32.7, 79.0], [32.8, 79.0], [32.9, 80.0], [33.0, 80.0], [33.1, 80.0], [33.2, 81.0], [33.3, 81.0], [33.4, 81.0], [33.5, 81.0], [33.6, 82.0], [33.7, 82.0], [33.8, 82.0], [33.9, 83.0], [34.0, 83.0], [34.1, 83.0], [34.2, 83.0], [34.3, 84.0], [34.4, 84.0], [34.5, 85.0], [34.6, 85.0], [34.7, 86.0], [34.8, 87.0], [34.9, 87.0], [35.0, 88.0], [35.1, 88.0], [35.2, 89.0], [35.3, 89.0], [35.4, 90.0], [35.5, 91.0], [35.6, 92.0], [35.7, 92.0], [35.8, 93.0], [35.9, 93.0], [36.0, 94.0], [36.1, 94.0], [36.2, 94.0], [36.3, 95.0], [36.4, 95.0], [36.5, 96.0], [36.6, 96.0], [36.7, 97.0], [36.8, 97.0], [36.9, 98.0], [37.0, 98.0], [37.1, 98.0], [37.2, 99.0], [37.3, 99.0], [37.4, 99.0], [37.5, 100.0], [37.6, 100.0], [37.7, 100.0], [37.8, 100.0], [37.9, 101.0], [38.0, 101.0], [38.1, 102.0], [38.2, 103.0], [38.3, 103.0], [38.4, 104.0], [38.5, 104.0], [38.6, 105.0], [38.7, 105.0], [38.8, 105.0], [38.9, 105.0], [39.0, 106.0], [39.1, 107.0], [39.2, 107.0], [39.3, 107.0], [39.4, 108.0], [39.5, 108.0], [39.6, 108.0], [39.7, 109.0], [39.8, 109.0], [39.9, 110.0], [40.0, 110.0], [40.1, 110.0], [40.2, 111.0], [40.3, 111.0], [40.4, 112.0], [40.5, 112.0], [40.6, 112.0], [40.7, 113.0], [40.8, 113.0], [40.9, 114.0], [41.0, 114.0], [41.1, 114.0], [41.2, 115.0], [41.3, 115.0], [41.4, 115.0], [41.5, 116.0], [41.6, 116.0], [41.7, 116.0], [41.8, 117.0], [41.9, 117.0], [42.0, 117.0], [42.1, 118.0], [42.2, 118.0], [42.3, 119.0], [42.4, 119.0], [42.5, 119.0], [42.6, 119.0], [42.7, 120.0], [42.8, 120.0], [42.9, 121.0], [43.0, 121.0], [43.1, 121.0], [43.2, 122.0], [43.3, 122.0], [43.4, 122.0], [43.5, 123.0], [43.6, 123.0], [43.7, 123.0], [43.8, 124.0], [43.9, 125.0], [44.0, 125.0], [44.1, 125.0], [44.2, 126.0], [44.3, 126.0], [44.4, 126.0], [44.5, 126.0], [44.6, 126.0], [44.7, 126.0], [44.8, 126.0], [44.9, 127.0], [45.0, 127.0], [45.1, 127.0], [45.2, 128.0], [45.3, 128.0], [45.4, 128.0], [45.5, 128.0], [45.6, 128.0], [45.7, 129.0], [45.8, 129.0], [45.9, 129.0], [46.0, 129.0], [46.1, 129.0], [46.2, 129.0], [46.3, 129.0], [46.4, 130.0], [46.5, 130.0], [46.6, 130.0], [46.7, 130.0], [46.8, 130.0], [46.9, 130.0], [47.0, 130.0], [47.1, 130.0], [47.2, 131.0], [47.3, 131.0], [47.4, 131.0], [47.5, 131.0], [47.6, 131.0], [47.7, 131.0], [47.8, 131.0], [47.9, 132.0], [48.0, 132.0], [48.1, 132.0], [48.2, 132.0], [48.3, 132.0], [48.4, 133.0], [48.5, 133.0], [48.6, 133.0], [48.7, 133.0], [48.8, 133.0], [48.9, 133.0], [49.0, 134.0], [49.1, 134.0], [49.2, 134.0], [49.3, 134.0], [49.4, 134.0], [49.5, 134.0], [49.6, 135.0], [49.7, 135.0], [49.8, 135.0], [49.9, 135.0], [50.0, 135.0], [50.1, 135.0], [50.2, 135.0], [50.3, 135.0], [50.4, 136.0], [50.5, 136.0], [50.6, 136.0], [50.7, 136.0], [50.8, 136.0], [50.9, 136.0], [51.0, 137.0], [51.1, 137.0], [51.2, 137.0], [51.3, 137.0], [51.4, 137.0], [51.5, 137.0], [51.6, 137.0], [51.7, 138.0], [51.8, 138.0], [51.9, 138.0], [52.0, 138.0], [52.1, 139.0], [52.2, 139.0], [52.3, 139.0], [52.4, 139.0], [52.5, 139.0], [52.6, 139.0], [52.7, 139.0], [52.8, 140.0], [52.9, 140.0], [53.0, 140.0], [53.1, 140.0], [53.2, 141.0], [53.3, 141.0], [53.4, 142.0], [53.5, 142.0], [53.6, 142.0], [53.7, 142.0], [53.8, 143.0], [53.9, 143.0], [54.0, 143.0], [54.1, 143.0], [54.2, 143.0], [54.3, 144.0], [54.4, 144.0], [54.5, 144.0], [54.6, 144.0], [54.7, 145.0], [54.8, 145.0], [54.9, 145.0], [55.0, 145.0], [55.1, 146.0], [55.2, 146.0], [55.3, 146.0], [55.4, 146.0], [55.5, 146.0], [55.6, 147.0], [55.7, 147.0], [55.8, 147.0], [55.9, 148.0], [56.0, 148.0], [56.1, 148.0], [56.2, 148.0], [56.3, 148.0], [56.4, 149.0], [56.5, 149.0], [56.6, 149.0], [56.7, 150.0], [56.8, 150.0], [56.9, 150.0], [57.0, 151.0], [57.1, 151.0], [57.2, 152.0], [57.3, 152.0], [57.4, 152.0], [57.5, 153.0], [57.6, 153.0], [57.7, 153.0], [57.8, 154.0], [57.9, 154.0], [58.0, 154.0], [58.1, 154.0], [58.2, 155.0], [58.3, 155.0], [58.4, 155.0], [58.5, 155.0], [58.6, 155.0], [58.7, 156.0], [58.8, 156.0], [58.9, 156.0], [59.0, 157.0], [59.1, 157.0], [59.2, 158.0], [59.3, 158.0], [59.4, 158.0], [59.5, 159.0], [59.6, 159.0], [59.7, 160.0], [59.8, 160.0], [59.9, 161.0], [60.0, 161.0], [60.1, 161.0], [60.2, 161.0], [60.3, 162.0], [60.4, 162.0], [60.5, 163.0], [60.6, 164.0], [60.7, 164.0], [60.8, 165.0], [60.9, 165.0], [61.0, 166.0], [61.1, 166.0], [61.2, 167.0], [61.3, 167.0], [61.4, 168.0], [61.5, 168.0], [61.6, 169.0], [61.7, 170.0], [61.8, 171.0], [61.9, 172.0], [62.0, 173.0], [62.1, 174.0], [62.2, 175.0], [62.3, 175.0], [62.4, 176.0], [62.5, 177.0], [62.6, 178.0], [62.7, 180.0], [62.8, 181.0], [62.9, 182.0], [63.0, 183.0], [63.1, 184.0], [63.2, 186.0], [63.3, 187.0], [63.4, 188.0], [63.5, 188.0], [63.6, 189.0], [63.7, 190.0], [63.8, 191.0], [63.9, 192.0], [64.0, 194.0], [64.1, 196.0], [64.2, 197.0], [64.3, 199.0], [64.4, 201.0], [64.5, 203.0], [64.6, 204.0], [64.7, 206.0], [64.8, 207.0], [64.9, 208.0], [65.0, 210.0], [65.1, 211.0], [65.2, 211.0], [65.3, 213.0], [65.4, 214.0], [65.5, 217.0], [65.6, 218.0], [65.7, 220.0], [65.8, 223.0], [65.9, 225.0], [66.0, 226.0], [66.1, 228.0], [66.2, 230.0], [66.3, 231.0], [66.4, 233.0], [66.5, 234.0], [66.6, 236.0], [66.7, 237.0], [66.8, 243.0], [66.9, 246.0], [67.0, 247.0], [67.1, 249.0], [67.2, 250.0], [67.3, 252.0], [67.4, 253.0], [67.5, 255.0], [67.6, 257.0], [67.7, 257.0], [67.8, 258.0], [67.9, 260.0], [68.0, 261.0], [68.1, 263.0], [68.2, 264.0], [68.3, 265.0], [68.4, 266.0], [68.5, 268.0], [68.6, 268.0], [68.7, 269.0], [68.8, 270.0], [68.9, 274.0], [69.0, 278.0], [69.1, 279.0], [69.2, 281.0], [69.3, 282.0], [69.4, 282.0], [69.5, 283.0], [69.6, 285.0], [69.7, 286.0], [69.8, 288.0], [69.9, 289.0], [70.0, 290.0], [70.1, 291.0], [70.2, 294.0], [70.3, 295.0], [70.4, 297.0], [70.5, 299.0], [70.6, 305.0], [70.7, 305.0], [70.8, 306.0], [70.9, 307.0], [71.0, 309.0], [71.1, 309.0], [71.2, 310.0], [71.3, 312.0], [71.4, 315.0], [71.5, 316.0], [71.6, 318.0], [71.7, 320.0], [71.8, 322.0], [71.9, 323.0], [72.0, 325.0], [72.1, 326.0], [72.2, 327.0], [72.3, 328.0], [72.4, 329.0], [72.5, 331.0], [72.6, 331.0], [72.7, 333.0], [72.8, 334.0], [72.9, 337.0], [73.0, 338.0], [73.1, 341.0], [73.2, 342.0], [73.3, 347.0], [73.4, 348.0], [73.5, 349.0], [73.6, 350.0], [73.7, 351.0], [73.8, 354.0], [73.9, 355.0], [74.0, 358.0], [74.1, 358.0], [74.2, 359.0], [74.3, 360.0], [74.4, 361.0], [74.5, 361.0], [74.6, 361.0], [74.7, 362.0], [74.8, 364.0], [74.9, 366.0], [75.0, 367.0], [75.1, 370.0], [75.2, 371.0], [75.3, 373.0], [75.4, 374.0], [75.5, 376.0], [75.6, 377.0], [75.7, 377.0], [75.8, 378.0], [75.9, 378.0], [76.0, 378.0], [76.1, 380.0], [76.2, 383.0], [76.3, 386.0], [76.4, 387.0], [76.5, 388.0], [76.6, 390.0], [76.7, 392.0], [76.8, 395.0], [76.9, 395.0], [77.0, 395.0], [77.1, 396.0], [77.2, 397.0], [77.3, 398.0], [77.4, 399.0], [77.5, 400.0], [77.6, 401.0], [77.7, 403.0], [77.8, 404.0], [77.9, 406.0], [78.0, 408.0], [78.1, 410.0], [78.2, 411.0], [78.3, 413.0], [78.4, 413.0], [78.5, 414.0], [78.6, 416.0], [78.7, 417.0], [78.8, 417.0], [78.9, 418.0], [79.0, 420.0], [79.1, 421.0], [79.2, 421.0], [79.3, 422.0], [79.4, 423.0], [79.5, 424.0], [79.6, 426.0], [79.7, 428.0], [79.8, 428.0], [79.9, 428.0], [80.0, 429.0], [80.1, 429.0], [80.2, 430.0], [80.3, 430.0], [80.4, 431.0], [80.5, 432.0], [80.6, 432.0], [80.7, 433.0], [80.8, 433.0], [80.9, 434.0], [81.0, 434.0], [81.1, 438.0], [81.2, 439.0], [81.3, 440.0], [81.4, 441.0], [81.5, 442.0], [81.6, 443.0], [81.7, 444.0], [81.8, 446.0], [81.9, 449.0], [82.0, 451.0], [82.1, 452.0], [82.2, 452.0], [82.3, 453.0], [82.4, 454.0], [82.5, 455.0], [82.6, 457.0], [82.7, 461.0], [82.8, 462.0], [82.9, 464.0], [83.0, 465.0], [83.1, 466.0], [83.2, 467.0], [83.3, 469.0], [83.4, 469.0], [83.5, 470.0], [83.6, 471.0], [83.7, 472.0], [83.8, 472.0], [83.9, 473.0], [84.0, 474.0], [84.1, 474.0], [84.2, 475.0], [84.3, 476.0], [84.4, 476.0], [84.5, 477.0], [84.6, 477.0], [84.7, 478.0], [84.8, 480.0], [84.9, 482.0], [85.0, 483.0], [85.1, 485.0], [85.2, 486.0], [85.3, 488.0], [85.4, 490.0], [85.5, 490.0], [85.6, 491.0], [85.7, 492.0], [85.8, 493.0], [85.9, 495.0], [86.0, 496.0], [86.1, 497.0], [86.2, 500.0], [86.3, 503.0], [86.4, 506.0], [86.5, 507.0], [86.6, 508.0], [86.7, 509.0], [86.8, 511.0], [86.9, 511.0], [87.0, 512.0], [87.1, 513.0], [87.2, 514.0], [87.3, 516.0], [87.4, 517.0], [87.5, 521.0], [87.6, 522.0], [87.7, 523.0], [87.8, 523.0], [87.9, 525.0], [88.0, 526.0], [88.1, 527.0], [88.2, 529.0], [88.3, 530.0], [88.4, 531.0], [88.5, 531.0], [88.6, 532.0], [88.7, 533.0], [88.8, 534.0], [88.9, 534.0], [89.0, 535.0], [89.1, 537.0], [89.2, 537.0], [89.3, 538.0], [89.4, 539.0], [89.5, 540.0], [89.6, 542.0], [89.7, 542.0], [89.8, 543.0], [89.9, 545.0], [90.0, 546.0], [90.1, 547.0], [90.2, 548.0], [90.3, 548.0], [90.4, 549.0], [90.5, 550.0], [90.6, 550.0], [90.7, 551.0], [90.8, 551.0], [90.9, 552.0], [91.0, 553.0], [91.1, 553.0], [91.2, 553.0], [91.3, 554.0], [91.4, 555.0], [91.5, 556.0], [91.6, 557.0], [91.7, 558.0], [91.8, 559.0], [91.9, 559.0], [92.0, 560.0], [92.1, 561.0], [92.2, 563.0], [92.3, 565.0], [92.4, 566.0], [92.5, 567.0], [92.6, 567.0], [92.7, 567.0], [92.8, 568.0], [92.9, 568.0], [93.0, 569.0], [93.1, 571.0], [93.2, 574.0], [93.3, 575.0], [93.4, 577.0], [93.5, 578.0], [93.6, 579.0], [93.7, 580.0], [93.8, 581.0], [93.9, 583.0], [94.0, 583.0], [94.1, 584.0], [94.2, 585.0], [94.3, 586.0], [94.4, 588.0], [94.5, 588.0], [94.6, 588.0], [94.7, 589.0], [94.8, 591.0], [94.9, 592.0], [95.0, 593.0], [95.1, 594.0], [95.2, 595.0], [95.3, 596.0], [95.4, 597.0], [95.5, 597.0], [95.6, 602.0], [95.7, 604.0], [95.8, 606.0], [95.9, 610.0], [96.0, 611.0], [96.1, 613.0], [96.2, 615.0], [96.3, 617.0], [96.4, 618.0], [96.5, 619.0], [96.6, 620.0], [96.7, 622.0], [96.8, 626.0], [96.9, 628.0], [97.0, 632.0], [97.1, 635.0], [97.2, 636.0], [97.3, 639.0], [97.4, 642.0], [97.5, 644.0], [97.6, 647.0], [97.7, 649.0], [97.8, 650.0], [97.9, 652.0], [98.0, 654.0], [98.1, 659.0], [98.2, 664.0], [98.3, 668.0], [98.4, 678.0], [98.5, 684.0], [98.6, 690.0], [98.7, 694.0], [98.8, 696.0], [98.9, 698.0], [99.0, 705.0], [99.1, 717.0], [99.2, 735.0], [99.3, 744.0], [99.4, 758.0], [99.5, 790.0], [99.6, 795.0], [99.7, 3486.0], [99.8, 5561.0], [99.9, 11015.0], [100.0, 24762.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 9365.0, "series": [{"data": [[0.0, 9365.0], [600.0, 842.0], [700.0, 170.0], [800.0, 6.0], [1000.0, 1.0], [1100.0, 5.0], [1200.0, 2.0], [1500.0, 1.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 1.0], [3300.0, 1.0], [3400.0, 1.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [4700.0, 3.0], [5100.0, 2.0], [5000.0, 2.0], [4900.0, 2.0], [5200.0, 1.0], [5600.0, 1.0], [5500.0, 4.0], [5400.0, 1.0], [5800.0, 1.0], [8400.0, 1.0], [8200.0, 2.0], [8500.0, 1.0], [9000.0, 1.0], [9100.0, 1.0], [9700.0, 2.0], [9300.0, 2.0], [9500.0, 2.0], [9600.0, 1.0], [10200.0, 1.0], [9800.0, 1.0], [10400.0, 2.0], [10300.0, 2.0], [10700.0, 1.0], [11100.0, 1.0], [10800.0, 1.0], [11000.0, 2.0], [10900.0, 1.0], [11500.0, 2.0], [11300.0, 1.0], [11400.0, 1.0], [11600.0, 1.0], [11700.0, 1.0], [12100.0, 1.0], [12200.0, 1.0], [12000.0, 2.0], [11900.0, 1.0], [11800.0, 2.0], [12700.0, 1.0], [12600.0, 1.0], [12300.0, 1.0], [13000.0, 1.0], [17800.0, 1.0], [18300.0, 1.0], [22700.0, 1.0], [22900.0, 1.0], [24500.0, 1.0], [24700.0, 1.0], [100.0, 6717.0], [200.0, 1547.0], [300.0, 1736.0], [400.0, 2178.0], [500.0, 2346.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 85.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 21556.0, "series": [{"data": [[0.0, 21556.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3359.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 85.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 75.36262513904342, "minX": 1.57676214E12, "maxY": 84.21774193548393, "series": [{"data": [[1.57676226E12, 75.36262513904342], [1.57676214E12, 84.21774193548393], [1.5767622E12, 75.90455540954885]], "isOverall": false, "label": "1. Save API", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676226E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.406407035175875, "minX": 1.0, "maxY": 640.8787878787879, "series": [{"data": [[2.0, 39.32463768115942], [3.0, 90.46830985915493], [4.0, 6.721088435374147], [5.0, 8.392857142857144], [6.0, 15.43157894736842], [7.0, 18.71604938271605], [8.0, 18.45454545454545], [9.0, 33.91228070175439], [10.0, 22.585585585585587], [11.0, 29.144927536231894], [12.0, 32.44444444444444], [13.0, 40.580645161290334], [14.0, 37.53773584905658], [15.0, 31.129310344827594], [16.0, 36.88888888888889], [17.0, 64.33333333333334], [18.0, 188.523489932886], [19.0, 47.257575757575765], [20.0, 56.322580645161274], [21.0, 83.69047619047618], [22.0, 279.181818181818], [23.0, 53.59493670886074], [24.0, 72.4423076923077], [25.0, 86.18367346938776], [26.0, 95.9333333333333], [27.0, 66.23809523809523], [28.0, 91.02173913043477], [29.0, 66.85227272727272], [30.0, 82.32812500000003], [31.0, 92.52941176470586], [33.0, 138.24444444444444], [32.0, 79.47572815533982], [35.0, 87.20979020979023], [34.0, 114.20481927710843], [37.0, 130.94915254237284], [36.0, 117.45161290322581], [39.0, 96.45794392523364], [38.0, 162.15789473684217], [41.0, 87.3191489361702], [40.0, 104.247311827957], [43.0, 147.75531914893617], [42.0, 113.08474576271188], [45.0, 141.16999999999996], [44.0, 159.62500000000003], [47.0, 116.12162162162164], [46.0, 162.20202020202026], [49.0, 122.40287769784167], [48.0, 102.03389830508478], [51.0, 142.109243697479], [50.0, 129.046511627907], [53.0, 214.37878787878785], [52.0, 151.43137254901967], [55.0, 107.35099337748345], [54.0, 167.82926829268288], [57.0, 190.82022471910116], [56.0, 194.64772727272728], [59.0, 227.5192307692308], [58.0, 166.33734939759037], [61.0, 194.59047619047618], [60.0, 205.7941176470588], [63.0, 199.3904761904761], [62.0, 155.84259259259258], [67.0, 145.6734693877551], [66.0, 226.71296296296296], [65.0, 186.51190476190484], [64.0, 193.64285714285722], [71.0, 217.3815789473684], [70.0, 262.64102564102564], [69.0, 201.48913043478254], [68.0, 272.3125], [75.0, 162.86466165413535], [74.0, 222.51886792452834], [73.0, 180.69585253456228], [72.0, 237.41573033707866], [79.0, 255.38235294117646], [78.0, 154.75], [77.0, 213.08510638297872], [76.0, 251.61875], [83.0, 265.4776119402985], [82.0, 236.85714285714286], [81.0, 215.5964912280701], [80.0, 368.1328125000002], [87.0, 302.2695652173913], [86.0, 278.19090909090914], [85.0, 248.03174603174605], [84.0, 287.85714285714295], [89.0, 382.59499999999986], [90.0, 240.1607142857142], [91.0, 210.8736842105263], [88.0, 122.25000000000003], [92.0, 284.7074074074074], [93.0, 386.60377358490564], [94.0, 373.6943005181345], [95.0, 373.0248447204969], [96.0, 240.97619047619042], [97.0, 273.2962962962965], [98.0, 374.13291139240494], [99.0, 290.96551724137925], [100.0, 301.61783439490443], [101.0, 459.7582938388627], [102.0, 302.4684210526315], [103.0, 358.3521126760564], [104.0, 403.5833333333332], [105.0, 428.6935483870968], [106.0, 452.6875000000001], [107.0, 271.0921985815604], [108.0, 366.7286821705426], [109.0, 337.496296296296], [110.0, 167.87116564417178], [111.0, 360.47136563876677], [112.0, 356.308370044053], [113.0, 360.86486486486484], [114.0, 468.43283582089555], [115.0, 259.55555555555554], [116.0, 273.0900473933647], [117.0, 294.70469798657666], [118.0, 338.2624309392264], [119.0, 196.2520325203252], [120.0, 218.96376811594214], [121.0, 361.7578124999997], [122.0, 272.73873873873873], [123.0, 297.90421455938696], [124.0, 248.5693215339232], [125.0, 337.14346895074954], [126.0, 212.02341137123756], [127.0, 238.67620481927722], [128.0, 287.6107055961072], [129.0, 317.58928571428584], [130.0, 550.7697841726616], [131.0, 538.2608695652174], [132.0, 557.159420289855], [133.0, 555.5230769230769], [134.0, 547.9259259259258], [135.0, 555.3295454545453], [136.0, 585.6338797814209], [137.0, 547.2307692307694], [139.0, 583.1408450704225], [140.0, 603.6450216450213], [141.0, 579.55], [142.0, 580.4794520547944], [143.0, 601.2836879432627], [138.0, 596.4700854700855], [144.0, 596.0967741935483], [145.0, 577.9200000000001], [146.0, 626.3510638297874], [148.0, 640.8787878787879], [149.0, 615.6973684210528], [150.0, 620.3106796116506], [151.0, 601.7612903225807], [147.0, 604.1627906976746], [152.0, 627.9135802469136], [1.0, 2.406407035175875]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}, {"data": [[75.98928000000036, 236.03332000000125]], "isOverall": false, "label": "Save API HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 152.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1773.2, "minX": 1.57676214E12, "maxY": 6408761.5, "series": [{"data": [[1.57676226E12, 8570.466666666667], [1.57676214E12, 1773.2], [1.5767622E12, 108823.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57676226E12, 504728.56666666665], [1.57676214E12, 104426.6], [1.5767622E12, 6408761.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676226E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 226.58576434515962, "minX": 1.57676214E12, "maxY": 341.1490545050056, "series": [{"data": [[1.57676226E12, 341.1490545050056], [1.57676214E12, 307.77956989247315], [1.5767622E12, 226.58576434515962]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676226E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 226.5813841436709, "minX": 1.57676214E12, "maxY": 341.14460511679596, "series": [{"data": [[1.57676226E12, 341.14460511679596], [1.57676214E12, 307.771505376344], [1.5767622E12, 226.5813841436709]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676226E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.02071835304424008, "minX": 1.57676214E12, "maxY": 0.03763440860215054, "series": [{"data": [[1.57676226E12, 0.03281423804226915], [1.57676214E12, 0.03763440860215054], [1.5767622E12, 0.02071835304424008]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676226E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.57676214E12, "maxY": 24762.0, "series": [{"data": [[1.57676226E12, 678.0], [1.57676214E12, 11139.0], [1.5767622E12, 24762.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57676226E12, 19.0], [1.57676214E12, 4.0], [1.5767622E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57676226E12, 443.0], [1.57676214E12, 81.0], [1.5767622E12, 557.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57676226E12, 552.0], [1.57676214E12, 9455.499999999993], [1.5767622E12, 698.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57676226E12, 472.0], [1.57676214E12, 1638.699999999994], [1.5767622E12, 604.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676226E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 38.0, "maxY": 597.0, "series": [{"data": [[515.0, 2.0], [550.0, 138.0], [572.0, 5.0], [662.0, 135.0], [725.0, 137.0], [773.0, 146.0], [818.0, 144.0], [802.0, 137.0], [816.0, 20.0], [850.0, 42.0], [896.0, 84.0], [913.0, 63.0], [940.0, 111.0], [38.0, 10.0], [193.0, 378.0], [206.0, 490.0], [209.0, 257.5], [214.0, 401.0], [210.0, 352.5], [221.0, 66.0], [223.0, 597.0], [220.0, 539.0], [222.0, 433.0], [229.0, 128.0], [231.0, 218.0], [224.0, 362.0], [227.0, 543.0], [228.0, 358.0], [225.0, 305.0], [233.0, 112.0], [238.0, 597.0], [232.0, 588.0], [244.0, 245.0], [242.0, 404.5], [240.0, 581.0], [241.0, 231.0], [248.0, 134.5], [255.0, 391.5], [254.0, 289.0], [250.0, 266.0], [249.0, 491.0], [251.0, 548.0], [258.0, 309.0], [263.0, 584.0], [267.0, 542.0], [259.0, 417.0], [279.0, 228.5], [294.0, 389.0], [312.0, 466.0], [334.0, 46.0], [413.0, 2.0], [414.0, 2.0], [419.0, 2.0], [417.0, 2.0], [416.0, 2.0], [457.0, 104.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 940.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 38.0, "maxY": 597.0, "series": [{"data": [[515.0, 2.0], [550.0, 138.0], [572.0, 5.0], [662.0, 135.0], [725.0, 137.0], [773.0, 146.0], [818.0, 144.0], [802.0, 137.0], [816.0, 20.0], [850.0, 42.0], [896.0, 84.0], [913.0, 63.0], [940.0, 111.0], [38.0, 10.0], [193.0, 378.0], [206.0, 490.0], [209.0, 257.5], [214.0, 401.0], [210.0, 352.5], [221.0, 66.0], [223.0, 597.0], [220.0, 539.0], [222.0, 433.0], [229.0, 128.0], [231.0, 218.0], [224.0, 362.0], [227.0, 543.0], [228.0, 358.0], [225.0, 305.0], [233.0, 112.0], [238.0, 597.0], [232.0, 588.0], [244.0, 245.0], [242.0, 404.5], [240.0, 581.0], [241.0, 231.0], [248.0, 134.5], [255.0, 391.5], [254.0, 289.0], [250.0, 266.0], [249.0, 491.0], [251.0, 548.0], [258.0, 309.0], [263.0, 584.0], [267.0, 542.0], [259.0, 417.0], [279.0, 228.5], [294.0, 389.0], [312.0, 466.0], [334.0, 46.0], [413.0, 2.0], [414.0, 2.0], [419.0, 2.0], [417.0, 2.0], [416.0, 2.0], [457.0, 104.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 940.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.57676214E12, "maxY": 380.6666666666667, "series": [{"data": [[1.57676226E12, 28.183333333333334], [1.57676214E12, 7.816666666666666], [1.5767622E12, 380.6666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676226E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.2, "minX": 1.57676214E12, "maxY": 380.5, "series": [{"data": [[1.57676226E12, 29.966666666666665], [1.57676214E12, 6.2], [1.5767622E12, 380.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676226E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.2, "minX": 1.57676214E12, "maxY": 380.5, "series": [{"data": [[1.57676226E12, 29.966666666666665], [1.57676214E12, 6.2], [1.5767622E12, 380.5]], "isOverall": false, "label": "Save API HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676226E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.2, "minX": 1.57676214E12, "maxY": 380.5, "series": [{"data": [[1.57676226E12, 29.966666666666665], [1.57676214E12, 6.2], [1.5767622E12, 380.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676226E12, "title": "Total Transactions Per Second"}},
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

