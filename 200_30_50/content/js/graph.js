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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 436.0, "series": [{"data": [[0.0, 5.0], [0.1, 21.0], [0.2, 29.0], [0.3, 32.0], [0.4, 37.0], [0.5, 40.0], [0.6, 41.0], [0.7, 44.0], [0.8, 48.0], [0.9, 50.0], [1.0, 52.0], [1.1, 54.0], [1.2, 55.0], [1.3, 57.0], [1.4, 58.0], [1.5, 59.0], [1.6, 60.0], [1.7, 60.0], [1.8, 61.0], [1.9, 62.0], [2.0, 62.0], [2.1, 63.0], [2.2, 64.0], [2.3, 64.0], [2.4, 64.0], [2.5, 65.0], [2.6, 65.0], [2.7, 66.0], [2.8, 66.0], [2.9, 67.0], [3.0, 67.0], [3.1, 67.0], [3.2, 68.0], [3.3, 68.0], [3.4, 69.0], [3.5, 69.0], [3.6, 69.0], [3.7, 70.0], [3.8, 70.0], [3.9, 70.0], [4.0, 71.0], [4.1, 71.0], [4.2, 71.0], [4.3, 71.0], [4.4, 72.0], [4.5, 72.0], [4.6, 72.0], [4.7, 72.0], [4.8, 73.0], [4.9, 73.0], [5.0, 73.0], [5.1, 74.0], [5.2, 74.0], [5.3, 74.0], [5.4, 75.0], [5.5, 75.0], [5.6, 75.0], [5.7, 75.0], [5.8, 76.0], [5.9, 76.0], [6.0, 76.0], [6.1, 77.0], [6.2, 77.0], [6.3, 77.0], [6.4, 77.0], [6.5, 78.0], [6.6, 78.0], [6.7, 78.0], [6.8, 78.0], [6.9, 79.0], [7.0, 79.0], [7.1, 79.0], [7.2, 79.0], [7.3, 79.0], [7.4, 80.0], [7.5, 80.0], [7.6, 80.0], [7.7, 80.0], [7.8, 81.0], [7.9, 81.0], [8.0, 81.0], [8.1, 81.0], [8.2, 81.0], [8.3, 82.0], [8.4, 82.0], [8.5, 82.0], [8.6, 82.0], [8.7, 83.0], [8.8, 83.0], [8.9, 83.0], [9.0, 83.0], [9.1, 83.0], [9.2, 84.0], [9.3, 84.0], [9.4, 84.0], [9.5, 84.0], [9.6, 84.0], [9.7, 84.0], [9.8, 84.0], [9.9, 85.0], [10.0, 85.0], [10.1, 85.0], [10.2, 85.0], [10.3, 85.0], [10.4, 86.0], [10.5, 86.0], [10.6, 86.0], [10.7, 86.0], [10.8, 86.0], [10.9, 86.0], [11.0, 87.0], [11.1, 87.0], [11.2, 87.0], [11.3, 87.0], [11.4, 87.0], [11.5, 87.0], [11.6, 87.0], [11.7, 88.0], [11.8, 88.0], [11.9, 88.0], [12.0, 88.0], [12.1, 88.0], [12.2, 88.0], [12.3, 89.0], [12.4, 89.0], [12.5, 89.0], [12.6, 89.0], [12.7, 89.0], [12.8, 90.0], [12.9, 90.0], [13.0, 90.0], [13.1, 90.0], [13.2, 90.0], [13.3, 90.0], [13.4, 91.0], [13.5, 91.0], [13.6, 91.0], [13.7, 91.0], [13.8, 91.0], [13.9, 91.0], [14.0, 91.0], [14.1, 92.0], [14.2, 92.0], [14.3, 92.0], [14.4, 92.0], [14.5, 92.0], [14.6, 93.0], [14.7, 93.0], [14.8, 93.0], [14.9, 93.0], [15.0, 93.0], [15.1, 93.0], [15.2, 93.0], [15.3, 94.0], [15.4, 94.0], [15.5, 94.0], [15.6, 94.0], [15.7, 94.0], [15.8, 94.0], [15.9, 94.0], [16.0, 94.0], [16.1, 95.0], [16.2, 95.0], [16.3, 95.0], [16.4, 95.0], [16.5, 95.0], [16.6, 95.0], [16.7, 95.0], [16.8, 96.0], [16.9, 96.0], [17.0, 96.0], [17.1, 96.0], [17.2, 96.0], [17.3, 96.0], [17.4, 97.0], [17.5, 97.0], [17.6, 97.0], [17.7, 97.0], [17.8, 97.0], [17.9, 97.0], [18.0, 97.0], [18.1, 97.0], [18.2, 98.0], [18.3, 98.0], [18.4, 98.0], [18.5, 98.0], [18.6, 98.0], [18.7, 98.0], [18.8, 98.0], [18.9, 99.0], [19.0, 99.0], [19.1, 99.0], [19.2, 99.0], [19.3, 99.0], [19.4, 100.0], [19.5, 100.0], [19.6, 100.0], [19.7, 100.0], [19.8, 100.0], [19.9, 100.0], [20.0, 100.0], [20.1, 101.0], [20.2, 101.0], [20.3, 101.0], [20.4, 101.0], [20.5, 101.0], [20.6, 101.0], [20.7, 101.0], [20.8, 102.0], [20.9, 102.0], [21.0, 102.0], [21.1, 102.0], [21.2, 102.0], [21.3, 102.0], [21.4, 102.0], [21.5, 103.0], [21.6, 103.0], [21.7, 103.0], [21.8, 103.0], [21.9, 103.0], [22.0, 103.0], [22.1, 103.0], [22.2, 104.0], [22.3, 104.0], [22.4, 104.0], [22.5, 104.0], [22.6, 104.0], [22.7, 104.0], [22.8, 104.0], [22.9, 105.0], [23.0, 105.0], [23.1, 105.0], [23.2, 105.0], [23.3, 105.0], [23.4, 105.0], [23.5, 105.0], [23.6, 105.0], [23.7, 106.0], [23.8, 106.0], [23.9, 106.0], [24.0, 106.0], [24.1, 106.0], [24.2, 106.0], [24.3, 106.0], [24.4, 107.0], [24.5, 107.0], [24.6, 107.0], [24.7, 107.0], [24.8, 107.0], [24.9, 107.0], [25.0, 107.0], [25.1, 108.0], [25.2, 108.0], [25.3, 108.0], [25.4, 108.0], [25.5, 108.0], [25.6, 108.0], [25.7, 108.0], [25.8, 109.0], [25.9, 109.0], [26.0, 109.0], [26.1, 109.0], [26.2, 109.0], [26.3, 109.0], [26.4, 109.0], [26.5, 110.0], [26.6, 110.0], [26.7, 110.0], [26.8, 110.0], [26.9, 110.0], [27.0, 110.0], [27.1, 111.0], [27.2, 111.0], [27.3, 111.0], [27.4, 111.0], [27.5, 111.0], [27.6, 111.0], [27.7, 111.0], [27.8, 111.0], [27.9, 112.0], [28.0, 112.0], [28.1, 112.0], [28.2, 112.0], [28.3, 112.0], [28.4, 112.0], [28.5, 112.0], [28.6, 113.0], [28.7, 113.0], [28.8, 113.0], [28.9, 113.0], [29.0, 113.0], [29.1, 113.0], [29.2, 113.0], [29.3, 114.0], [29.4, 114.0], [29.5, 114.0], [29.6, 114.0], [29.7, 114.0], [29.8, 114.0], [29.9, 114.0], [30.0, 115.0], [30.1, 115.0], [30.2, 115.0], [30.3, 115.0], [30.4, 115.0], [30.5, 115.0], [30.6, 115.0], [30.7, 116.0], [30.8, 116.0], [30.9, 116.0], [31.0, 116.0], [31.1, 116.0], [31.2, 116.0], [31.3, 116.0], [31.4, 117.0], [31.5, 117.0], [31.6, 117.0], [31.7, 117.0], [31.8, 117.0], [31.9, 117.0], [32.0, 117.0], [32.1, 118.0], [32.2, 118.0], [32.3, 118.0], [32.4, 118.0], [32.5, 118.0], [32.6, 118.0], [32.7, 118.0], [32.8, 118.0], [32.9, 119.0], [33.0, 119.0], [33.1, 119.0], [33.2, 119.0], [33.3, 119.0], [33.4, 119.0], [33.5, 120.0], [33.6, 120.0], [33.7, 120.0], [33.8, 120.0], [33.9, 120.0], [34.0, 120.0], [34.1, 120.0], [34.2, 120.0], [34.3, 121.0], [34.4, 121.0], [34.5, 121.0], [34.6, 121.0], [34.7, 121.0], [34.8, 121.0], [34.9, 121.0], [35.0, 122.0], [35.1, 122.0], [35.2, 122.0], [35.3, 122.0], [35.4, 122.0], [35.5, 122.0], [35.6, 122.0], [35.7, 123.0], [35.8, 123.0], [35.9, 123.0], [36.0, 123.0], [36.1, 123.0], [36.2, 124.0], [36.3, 124.0], [36.4, 124.0], [36.5, 124.0], [36.6, 124.0], [36.7, 124.0], [36.8, 124.0], [36.9, 125.0], [37.0, 125.0], [37.1, 125.0], [37.2, 125.0], [37.3, 125.0], [37.4, 125.0], [37.5, 125.0], [37.6, 126.0], [37.7, 126.0], [37.8, 126.0], [37.9, 126.0], [38.0, 126.0], [38.1, 126.0], [38.2, 126.0], [38.3, 126.0], [38.4, 127.0], [38.5, 127.0], [38.6, 127.0], [38.7, 127.0], [38.8, 127.0], [38.9, 127.0], [39.0, 128.0], [39.1, 128.0], [39.2, 128.0], [39.3, 128.0], [39.4, 128.0], [39.5, 128.0], [39.6, 128.0], [39.7, 128.0], [39.8, 129.0], [39.9, 129.0], [40.0, 129.0], [40.1, 129.0], [40.2, 129.0], [40.3, 129.0], [40.4, 129.0], [40.5, 130.0], [40.6, 130.0], [40.7, 130.0], [40.8, 130.0], [40.9, 130.0], [41.0, 130.0], [41.1, 130.0], [41.2, 131.0], [41.3, 131.0], [41.4, 131.0], [41.5, 131.0], [41.6, 131.0], [41.7, 131.0], [41.8, 131.0], [41.9, 131.0], [42.0, 132.0], [42.1, 132.0], [42.2, 132.0], [42.3, 132.0], [42.4, 132.0], [42.5, 132.0], [42.6, 132.0], [42.7, 132.0], [42.8, 133.0], [42.9, 133.0], [43.0, 133.0], [43.1, 133.0], [43.2, 133.0], [43.3, 133.0], [43.4, 133.0], [43.5, 133.0], [43.6, 134.0], [43.7, 134.0], [43.8, 134.0], [43.9, 134.0], [44.0, 134.0], [44.1, 134.0], [44.2, 135.0], [44.3, 135.0], [44.4, 135.0], [44.5, 135.0], [44.6, 135.0], [44.7, 135.0], [44.8, 135.0], [44.9, 135.0], [45.0, 136.0], [45.1, 136.0], [45.2, 136.0], [45.3, 136.0], [45.4, 136.0], [45.5, 136.0], [45.6, 136.0], [45.7, 137.0], [45.8, 137.0], [45.9, 137.0], [46.0, 137.0], [46.1, 137.0], [46.2, 137.0], [46.3, 138.0], [46.4, 138.0], [46.5, 138.0], [46.6, 138.0], [46.7, 138.0], [46.8, 138.0], [46.9, 138.0], [47.0, 139.0], [47.1, 139.0], [47.2, 139.0], [47.3, 139.0], [47.4, 139.0], [47.5, 139.0], [47.6, 139.0], [47.7, 139.0], [47.8, 140.0], [47.9, 140.0], [48.0, 140.0], [48.1, 140.0], [48.2, 140.0], [48.3, 140.0], [48.4, 140.0], [48.5, 141.0], [48.6, 141.0], [48.7, 141.0], [48.8, 141.0], [48.9, 141.0], [49.0, 141.0], [49.1, 141.0], [49.2, 142.0], [49.3, 142.0], [49.4, 142.0], [49.5, 142.0], [49.6, 142.0], [49.7, 142.0], [49.8, 143.0], [49.9, 143.0], [50.0, 143.0], [50.1, 143.0], [50.2, 143.0], [50.3, 143.0], [50.4, 144.0], [50.5, 144.0], [50.6, 144.0], [50.7, 144.0], [50.8, 144.0], [50.9, 144.0], [51.0, 145.0], [51.1, 145.0], [51.2, 145.0], [51.3, 145.0], [51.4, 145.0], [51.5, 146.0], [51.6, 146.0], [51.7, 146.0], [51.8, 146.0], [51.9, 146.0], [52.0, 146.0], [52.1, 147.0], [52.2, 147.0], [52.3, 147.0], [52.4, 147.0], [52.5, 147.0], [52.6, 147.0], [52.7, 147.0], [52.8, 148.0], [52.9, 148.0], [53.0, 148.0], [53.1, 148.0], [53.2, 148.0], [53.3, 148.0], [53.4, 148.0], [53.5, 148.0], [53.6, 149.0], [53.7, 149.0], [53.8, 149.0], [53.9, 149.0], [54.0, 149.0], [54.1, 149.0], [54.2, 150.0], [54.3, 150.0], [54.4, 150.0], [54.5, 150.0], [54.6, 150.0], [54.7, 150.0], [54.8, 150.0], [54.9, 150.0], [55.0, 151.0], [55.1, 151.0], [55.2, 151.0], [55.3, 151.0], [55.4, 151.0], [55.5, 151.0], [55.6, 151.0], [55.7, 152.0], [55.8, 152.0], [55.9, 152.0], [56.0, 152.0], [56.1, 152.0], [56.2, 152.0], [56.3, 153.0], [56.4, 153.0], [56.5, 153.0], [56.6, 153.0], [56.7, 153.0], [56.8, 153.0], [56.9, 154.0], [57.0, 154.0], [57.1, 154.0], [57.2, 154.0], [57.3, 154.0], [57.4, 155.0], [57.5, 155.0], [57.6, 155.0], [57.7, 155.0], [57.8, 155.0], [57.9, 156.0], [58.0, 156.0], [58.1, 156.0], [58.2, 156.0], [58.3, 156.0], [58.4, 156.0], [58.5, 157.0], [58.6, 157.0], [58.7, 157.0], [58.8, 157.0], [58.9, 158.0], [59.0, 158.0], [59.1, 158.0], [59.2, 158.0], [59.3, 158.0], [59.4, 159.0], [59.5, 159.0], [59.6, 159.0], [59.7, 159.0], [59.8, 159.0], [59.9, 160.0], [60.0, 160.0], [60.1, 160.0], [60.2, 160.0], [60.3, 160.0], [60.4, 161.0], [60.5, 161.0], [60.6, 161.0], [60.7, 161.0], [60.8, 161.0], [60.9, 162.0], [61.0, 162.0], [61.1, 162.0], [61.2, 163.0], [61.3, 163.0], [61.4, 163.0], [61.5, 163.0], [61.6, 163.0], [61.7, 164.0], [61.8, 164.0], [61.9, 164.0], [62.0, 164.0], [62.1, 164.0], [62.2, 165.0], [62.3, 165.0], [62.4, 165.0], [62.5, 165.0], [62.6, 165.0], [62.7, 166.0], [62.8, 166.0], [62.9, 166.0], [63.0, 166.0], [63.1, 166.0], [63.2, 166.0], [63.3, 167.0], [63.4, 167.0], [63.5, 167.0], [63.6, 167.0], [63.7, 168.0], [63.8, 168.0], [63.9, 168.0], [64.0, 168.0], [64.1, 169.0], [64.2, 169.0], [64.3, 169.0], [64.4, 169.0], [64.5, 169.0], [64.6, 170.0], [64.7, 170.0], [64.8, 170.0], [64.9, 170.0], [65.0, 170.0], [65.1, 171.0], [65.2, 171.0], [65.3, 171.0], [65.4, 172.0], [65.5, 172.0], [65.6, 172.0], [65.7, 172.0], [65.8, 173.0], [65.9, 173.0], [66.0, 173.0], [66.1, 173.0], [66.2, 174.0], [66.3, 174.0], [66.4, 174.0], [66.5, 175.0], [66.6, 175.0], [66.7, 175.0], [66.8, 176.0], [66.9, 176.0], [67.0, 176.0], [67.1, 176.0], [67.2, 177.0], [67.3, 177.0], [67.4, 177.0], [67.5, 178.0], [67.6, 178.0], [67.7, 178.0], [67.8, 179.0], [67.9, 179.0], [68.0, 179.0], [68.1, 179.0], [68.2, 180.0], [68.3, 180.0], [68.4, 180.0], [68.5, 181.0], [68.6, 181.0], [68.7, 181.0], [68.8, 182.0], [68.9, 182.0], [69.0, 182.0], [69.1, 183.0], [69.2, 183.0], [69.3, 183.0], [69.4, 184.0], [69.5, 184.0], [69.6, 184.0], [69.7, 185.0], [69.8, 185.0], [69.9, 186.0], [70.0, 186.0], [70.1, 186.0], [70.2, 187.0], [70.3, 187.0], [70.4, 187.0], [70.5, 188.0], [70.6, 188.0], [70.7, 188.0], [70.8, 189.0], [70.9, 190.0], [71.0, 190.0], [71.1, 190.0], [71.2, 191.0], [71.3, 191.0], [71.4, 191.0], [71.5, 191.0], [71.6, 192.0], [71.7, 192.0], [71.8, 193.0], [71.9, 193.0], [72.0, 193.0], [72.1, 194.0], [72.2, 194.0], [72.3, 195.0], [72.4, 196.0], [72.5, 196.0], [72.6, 197.0], [72.7, 197.0], [72.8, 198.0], [72.9, 198.0], [73.0, 199.0], [73.1, 199.0], [73.2, 199.0], [73.3, 200.0], [73.4, 201.0], [73.5, 201.0], [73.6, 201.0], [73.7, 202.0], [73.8, 202.0], [73.9, 203.0], [74.0, 204.0], [74.1, 204.0], [74.2, 205.0], [74.3, 205.0], [74.4, 206.0], [74.5, 206.0], [74.6, 207.0], [74.7, 207.0], [74.8, 207.0], [74.9, 208.0], [75.0, 208.0], [75.1, 208.0], [75.2, 209.0], [75.3, 209.0], [75.4, 210.0], [75.5, 211.0], [75.6, 211.0], [75.7, 211.0], [75.8, 211.0], [75.9, 212.0], [76.0, 212.0], [76.1, 212.0], [76.2, 213.0], [76.3, 214.0], [76.4, 214.0], [76.5, 215.0], [76.6, 215.0], [76.7, 215.0], [76.8, 216.0], [76.9, 216.0], [77.0, 216.0], [77.1, 217.0], [77.2, 217.0], [77.3, 218.0], [77.4, 218.0], [77.5, 219.0], [77.6, 219.0], [77.7, 220.0], [77.8, 220.0], [77.9, 221.0], [78.0, 222.0], [78.1, 222.0], [78.2, 222.0], [78.3, 223.0], [78.4, 223.0], [78.5, 224.0], [78.6, 224.0], [78.7, 225.0], [78.8, 226.0], [78.9, 226.0], [79.0, 227.0], [79.1, 227.0], [79.2, 228.0], [79.3, 228.0], [79.4, 229.0], [79.5, 229.0], [79.6, 230.0], [79.7, 230.0], [79.8, 230.0], [79.9, 231.0], [80.0, 232.0], [80.1, 232.0], [80.2, 233.0], [80.3, 233.0], [80.4, 234.0], [80.5, 234.0], [80.6, 234.0], [80.7, 235.0], [80.8, 235.0], [80.9, 236.0], [81.0, 236.0], [81.1, 237.0], [81.2, 237.0], [81.3, 237.0], [81.4, 238.0], [81.5, 238.0], [81.6, 239.0], [81.7, 239.0], [81.8, 239.0], [81.9, 240.0], [82.0, 241.0], [82.1, 241.0], [82.2, 241.0], [82.3, 242.0], [82.4, 242.0], [82.5, 243.0], [82.6, 243.0], [82.7, 244.0], [82.8, 244.0], [82.9, 244.0], [83.0, 245.0], [83.1, 245.0], [83.2, 246.0], [83.3, 246.0], [83.4, 247.0], [83.5, 247.0], [83.6, 247.0], [83.7, 248.0], [83.8, 248.0], [83.9, 248.0], [84.0, 249.0], [84.1, 249.0], [84.2, 249.0], [84.3, 250.0], [84.4, 250.0], [84.5, 251.0], [84.6, 251.0], [84.7, 251.0], [84.8, 252.0], [84.9, 252.0], [85.0, 252.0], [85.1, 252.0], [85.2, 253.0], [85.3, 253.0], [85.4, 253.0], [85.5, 254.0], [85.6, 254.0], [85.7, 254.0], [85.8, 255.0], [85.9, 255.0], [86.0, 256.0], [86.1, 256.0], [86.2, 257.0], [86.3, 257.0], [86.4, 257.0], [86.5, 258.0], [86.6, 258.0], [86.7, 258.0], [86.8, 259.0], [86.9, 259.0], [87.0, 260.0], [87.1, 260.0], [87.2, 261.0], [87.3, 261.0], [87.4, 262.0], [87.5, 262.0], [87.6, 262.0], [87.7, 263.0], [87.8, 263.0], [87.9, 264.0], [88.0, 264.0], [88.1, 265.0], [88.2, 266.0], [88.3, 266.0], [88.4, 266.0], [88.5, 267.0], [88.6, 267.0], [88.7, 267.0], [88.8, 267.0], [88.9, 268.0], [89.0, 268.0], [89.1, 269.0], [89.2, 269.0], [89.3, 270.0], [89.4, 270.0], [89.5, 271.0], [89.6, 271.0], [89.7, 272.0], [89.8, 272.0], [89.9, 273.0], [90.0, 273.0], [90.1, 274.0], [90.2, 274.0], [90.3, 275.0], [90.4, 275.0], [90.5, 276.0], [90.6, 277.0], [90.7, 277.0], [90.8, 278.0], [90.9, 278.0], [91.0, 279.0], [91.1, 279.0], [91.2, 279.0], [91.3, 280.0], [91.4, 280.0], [91.5, 281.0], [91.6, 281.0], [91.7, 282.0], [91.8, 283.0], [91.9, 284.0], [92.0, 285.0], [92.1, 286.0], [92.2, 286.0], [92.3, 287.0], [92.4, 287.0], [92.5, 288.0], [92.6, 289.0], [92.7, 289.0], [92.8, 290.0], [92.9, 291.0], [93.0, 291.0], [93.1, 292.0], [93.2, 292.0], [93.3, 293.0], [93.4, 294.0], [93.5, 294.0], [93.6, 295.0], [93.7, 296.0], [93.8, 296.0], [93.9, 297.0], [94.0, 297.0], [94.1, 298.0], [94.2, 298.0], [94.3, 299.0], [94.4, 299.0], [94.5, 300.0], [94.6, 301.0], [94.7, 302.0], [94.8, 303.0], [94.9, 304.0], [95.0, 304.0], [95.1, 305.0], [95.2, 305.0], [95.3, 306.0], [95.4, 307.0], [95.5, 307.0], [95.6, 308.0], [95.7, 309.0], [95.8, 309.0], [95.9, 310.0], [96.0, 311.0], [96.1, 312.0], [96.2, 313.0], [96.3, 314.0], [96.4, 315.0], [96.5, 316.0], [96.6, 317.0], [96.7, 318.0], [96.8, 318.0], [96.9, 320.0], [97.0, 322.0], [97.1, 323.0], [97.2, 325.0], [97.3, 327.0], [97.4, 329.0], [97.5, 331.0], [97.6, 333.0], [97.7, 335.0], [97.8, 337.0], [97.9, 338.0], [98.0, 340.0], [98.1, 341.0], [98.2, 343.0], [98.3, 345.0], [98.4, 347.0], [98.5, 350.0], [98.6, 351.0], [98.7, 355.0], [98.8, 356.0], [98.9, 361.0], [99.0, 363.0], [99.1, 367.0], [99.2, 371.0], [99.3, 373.0], [99.4, 375.0], [99.5, 379.0], [99.6, 383.0], [99.7, 390.0], [99.8, 409.0], [99.9, 431.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 23.0, "minX": 0.0, "maxY": 5383.0, "series": [{"data": [[0.0, 1939.0], [300.0, 535.0], [100.0, 5383.0], [200.0, 2120.0], [400.0, 23.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10000.0, "series": [{"data": [[0.0, 10000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.809210526315786, "minX": 1.5767613E12, "maxY": 43.453898514851545, "series": [{"data": [[1.5767613E12, 11.809210526315786], [1.57676136E12, 43.453898514851545]], "isOverall": false, "label": "1. Save API", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676136E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5.5, "minX": 1.0, "maxY": 365.63999999999993, "series": [{"data": [[2.0, 48.0], [3.0, 37.78571428571429], [4.0, 39.57142857142858], [5.0, 49.44444444444444], [6.0, 53.64705882352942], [7.0, 58.04], [8.0, 64.82352941176471], [9.0, 91.3125], [10.0, 73.625], [11.0, 71.59459459459461], [12.0, 87.62500000000003], [13.0, 108.11764705882354], [14.0, 127.16000000000001], [15.0, 94.44444444444444], [16.0, 138.44117647058823], [17.0, 96.3953488372093], [18.0, 105.65000000000003], [19.0, 135.07692307692307], [20.0, 151.02777777777783], [21.0, 152.90322580645164], [22.0, 136.26923076923077], [23.0, 128.20833333333331], [24.0, 149.45945945945945], [25.0, 135.62500000000003], [26.0, 135.67441860465118], [27.0, 142.72727272727272], [28.0, 132.5641025641025], [29.0, 131.6800000000001], [30.0, 141.6263736263736], [31.0, 164.95999999999998], [32.0, 115.2695652173913], [33.0, 135.34513274336288], [34.0, 119.8783269961977], [35.0, 119.07142857142853], [36.0, 116.68435754189944], [37.0, 135.79182156133825], [38.0, 130.6650485436894], [39.0, 138.93421052631575], [40.0, 167.60244648318056], [41.0, 155.5494505494505], [42.0, 145.87138263665597], [43.0, 135.13225806451604], [44.0, 166.92744479495275], [45.0, 155.7561521252798], [46.0, 154.50844594594602], [47.0, 165.9099099099097], [48.0, 153.06475583864096], [49.0, 164.79466666666664], [50.0, 171.15558912386686], [51.0, 207.79574468085104], [52.0, 199.55555555555554], [53.0, 273.10344827586204], [54.0, 282.3482142857141], [55.0, 286.51685393258424], [56.0, 289.054945054945], [57.0, 301.50467289719643], [58.0, 310.1977401129946], [59.0, 365.63999999999993], [1.0, 5.5]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}, {"data": [[42.49189999999995, 162.33160000000066]], "isOverall": false, "label": "Save API HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 59.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1437.1, "minX": 1.5767613E12, "maxY": 2721828.8, "series": [{"data": [[1.5767613E12, 1437.1], [1.57676136E12, 46044.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5767613E12, 85337.86666666667], [1.57676136E12, 2721828.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676136E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 94.92763157894733, "minX": 1.5767613E12, "maxY": 164.44492574257492, "series": [{"data": [[1.5767613E12, 94.92763157894733], [1.57676136E12, 164.44492574257492]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676136E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 94.86184210526324, "minX": 1.5767613E12, "maxY": 164.42440181518157, "series": [{"data": [[1.5767613E12, 94.86184210526324], [1.57676136E12, 164.42440181518157]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676136E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.047339108910891076, "minX": 1.5767613E12, "maxY": 0.19736842105263147, "series": [{"data": [[1.5767613E12, 0.19736842105263147], [1.57676136E12, 0.047339108910891076]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676136E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.5767613E12, "maxY": 436.0, "series": [{"data": [[1.5767613E12, 255.0], [1.57676136E12, 436.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5767613E12, 14.0], [1.57676136E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5767613E12, 175.0], [1.57676136E12, 275.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5767613E12, 241.64999999999992], [1.57676136E12, 363.03000000000065]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5767613E12, 193.25], [1.57676136E12, 305.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676136E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 31.0, "minX": 17.0, "maxY": 308.5, "series": [{"data": [[67.0, 44.0], [109.0, 75.0], [128.0, 122.0], [151.0, 221.0], [145.0, 243.0], [157.0, 141.0], [166.0, 292.0], [173.0, 263.0], [175.0, 272.0], [169.0, 308.0], [178.0, 261.0], [189.0, 139.0], [191.0, 235.0], [186.0, 228.5], [194.0, 308.5], [196.0, 283.5], [193.0, 121.0], [204.0, 289.5], [201.0, 247.0], [202.0, 163.0], [212.0, 147.5], [237.0, 161.0], [269.0, 150.0], [17.0, 31.0], [298.0, 162.5], [303.0, 159.0], [313.0, 136.0], [310.0, 153.0], [331.0, 142.0], [333.0, 151.0], [346.0, 80.5], [365.0, 131.0], [371.0, 131.0], [374.0, 125.5], [381.0, 120.0], [379.0, 90.0], [399.0, 91.0], [403.0, 107.0], [406.0, 101.0], [401.0, 98.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 406.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 31.0, "minX": 17.0, "maxY": 308.5, "series": [{"data": [[67.0, 44.0], [109.0, 75.0], [128.0, 122.0], [151.0, 221.0], [145.0, 243.0], [157.0, 141.0], [166.0, 292.0], [173.0, 263.0], [175.0, 272.0], [169.0, 308.0], [178.0, 261.0], [189.0, 139.0], [191.0, 235.0], [186.0, 228.5], [194.0, 308.5], [196.0, 283.5], [193.0, 121.0], [204.0, 289.5], [201.0, 247.0], [202.0, 163.0], [212.0, 147.5], [237.0, 161.0], [269.0, 150.0], [17.0, 31.0], [298.0, 162.5], [303.0, 159.0], [313.0, 136.0], [310.0, 153.0], [331.0, 142.0], [333.0, 151.0], [346.0, 80.5], [365.0, 131.0], [371.0, 131.0], [374.0, 125.5], [381.0, 120.0], [379.0, 90.0], [399.0, 91.0], [403.0, 107.0], [406.0, 101.0], [401.0, 98.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 406.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.4, "minX": 1.5767613E12, "maxY": 161.26666666666668, "series": [{"data": [[1.5767613E12, 5.4], [1.57676136E12, 161.26666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676136E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.066666666666666, "minX": 1.5767613E12, "maxY": 161.6, "series": [{"data": [[1.5767613E12, 5.066666666666666], [1.57676136E12, 161.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676136E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.066666666666666, "minX": 1.5767613E12, "maxY": 161.6, "series": [{"data": [[1.5767613E12, 5.066666666666666], [1.57676136E12, 161.6]], "isOverall": false, "label": "Save API HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676136E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.066666666666666, "minX": 1.5767613E12, "maxY": 161.6, "series": [{"data": [[1.5767613E12, 5.066666666666666], [1.57676136E12, 161.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57676136E12, "title": "Total Transactions Per Second"}},
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

