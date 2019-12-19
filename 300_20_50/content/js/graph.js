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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 35477.0, "series": [{"data": [[0.0, 5.0], [0.1, 13.0], [0.2, 16.0], [0.3, 18.0], [0.4, 20.0], [0.5, 23.0], [0.6, 27.0], [0.7, 30.0], [0.8, 34.0], [0.9, 39.0], [1.0, 41.0], [1.1, 43.0], [1.2, 44.0], [1.3, 46.0], [1.4, 49.0], [1.5, 50.0], [1.6, 52.0], [1.7, 53.0], [1.8, 54.0], [1.9, 57.0], [2.0, 59.0], [2.1, 60.0], [2.2, 61.0], [2.3, 62.0], [2.4, 63.0], [2.5, 63.0], [2.6, 64.0], [2.7, 65.0], [2.8, 65.0], [2.9, 66.0], [3.0, 67.0], [3.1, 67.0], [3.2, 68.0], [3.3, 69.0], [3.4, 70.0], [3.5, 71.0], [3.6, 73.0], [3.7, 75.0], [3.8, 77.0], [3.9, 79.0], [4.0, 80.0], [4.1, 81.0], [4.2, 83.0], [4.3, 84.0], [4.4, 85.0], [4.5, 87.0], [4.6, 87.0], [4.7, 89.0], [4.8, 91.0], [4.9, 92.0], [5.0, 93.0], [5.1, 94.0], [5.2, 95.0], [5.3, 96.0], [5.4, 96.0], [5.5, 97.0], [5.6, 97.0], [5.7, 98.0], [5.8, 98.0], [5.9, 99.0], [6.0, 100.0], [6.1, 100.0], [6.2, 101.0], [6.3, 101.0], [6.4, 102.0], [6.5, 102.0], [6.6, 103.0], [6.7, 103.0], [6.8, 104.0], [6.9, 104.0], [7.0, 105.0], [7.1, 105.0], [7.2, 105.0], [7.3, 105.0], [7.4, 106.0], [7.5, 106.0], [7.6, 107.0], [7.7, 107.0], [7.8, 108.0], [7.9, 108.0], [8.0, 109.0], [8.1, 109.0], [8.2, 110.0], [8.3, 110.0], [8.4, 111.0], [8.5, 111.0], [8.6, 111.0], [8.7, 112.0], [8.8, 112.0], [8.9, 112.0], [9.0, 113.0], [9.1, 113.0], [9.2, 113.0], [9.3, 113.0], [9.4, 114.0], [9.5, 114.0], [9.6, 114.0], [9.7, 115.0], [9.8, 115.0], [9.9, 115.0], [10.0, 115.0], [10.1, 115.0], [10.2, 116.0], [10.3, 116.0], [10.4, 116.0], [10.5, 117.0], [10.6, 117.0], [10.7, 117.0], [10.8, 117.0], [10.9, 117.0], [11.0, 118.0], [11.1, 118.0], [11.2, 118.0], [11.3, 118.0], [11.4, 118.0], [11.5, 118.0], [11.6, 119.0], [11.7, 119.0], [11.8, 119.0], [11.9, 119.0], [12.0, 119.0], [12.1, 120.0], [12.2, 120.0], [12.3, 120.0], [12.4, 120.0], [12.5, 121.0], [12.6, 121.0], [12.7, 121.0], [12.8, 121.0], [12.9, 122.0], [13.0, 122.0], [13.1, 122.0], [13.2, 122.0], [13.3, 123.0], [13.4, 123.0], [13.5, 123.0], [13.6, 124.0], [13.7, 124.0], [13.8, 124.0], [13.9, 124.0], [14.0, 124.0], [14.1, 124.0], [14.2, 125.0], [14.3, 125.0], [14.4, 125.0], [14.5, 125.0], [14.6, 125.0], [14.7, 125.0], [14.8, 125.0], [14.9, 126.0], [15.0, 126.0], [15.1, 126.0], [15.2, 126.0], [15.3, 126.0], [15.4, 127.0], [15.5, 127.0], [15.6, 127.0], [15.7, 127.0], [15.8, 127.0], [15.9, 128.0], [16.0, 128.0], [16.1, 128.0], [16.2, 128.0], [16.3, 129.0], [16.4, 129.0], [16.5, 129.0], [16.6, 129.0], [16.7, 129.0], [16.8, 129.0], [16.9, 130.0], [17.0, 130.0], [17.1, 130.0], [17.2, 131.0], [17.3, 131.0], [17.4, 131.0], [17.5, 131.0], [17.6, 132.0], [17.7, 132.0], [17.8, 132.0], [17.9, 132.0], [18.0, 133.0], [18.1, 133.0], [18.2, 133.0], [18.3, 133.0], [18.4, 134.0], [18.5, 134.0], [18.6, 134.0], [18.7, 134.0], [18.8, 135.0], [18.9, 135.0], [19.0, 135.0], [19.1, 136.0], [19.2, 136.0], [19.3, 136.0], [19.4, 136.0], [19.5, 136.0], [19.6, 137.0], [19.7, 137.0], [19.8, 137.0], [19.9, 137.0], [20.0, 137.0], [20.1, 138.0], [20.2, 138.0], [20.3, 138.0], [20.4, 138.0], [20.5, 139.0], [20.6, 139.0], [20.7, 139.0], [20.8, 139.0], [20.9, 139.0], [21.0, 139.0], [21.1, 139.0], [21.2, 140.0], [21.3, 140.0], [21.4, 140.0], [21.5, 140.0], [21.6, 140.0], [21.7, 140.0], [21.8, 141.0], [21.9, 141.0], [22.0, 141.0], [22.1, 141.0], [22.2, 141.0], [22.3, 141.0], [22.4, 142.0], [22.5, 142.0], [22.6, 142.0], [22.7, 142.0], [22.8, 142.0], [22.9, 142.0], [23.0, 143.0], [23.1, 143.0], [23.2, 143.0], [23.3, 143.0], [23.4, 143.0], [23.5, 144.0], [23.6, 144.0], [23.7, 144.0], [23.8, 144.0], [23.9, 144.0], [24.0, 144.0], [24.1, 145.0], [24.2, 145.0], [24.3, 145.0], [24.4, 145.0], [24.5, 146.0], [24.6, 146.0], [24.7, 146.0], [24.8, 146.0], [24.9, 146.0], [25.0, 146.0], [25.1, 146.0], [25.2, 147.0], [25.3, 147.0], [25.4, 147.0], [25.5, 147.0], [25.6, 147.0], [25.7, 147.0], [25.8, 147.0], [25.9, 148.0], [26.0, 148.0], [26.1, 148.0], [26.2, 148.0], [26.3, 148.0], [26.4, 148.0], [26.5, 148.0], [26.6, 149.0], [26.7, 149.0], [26.8, 149.0], [26.9, 149.0], [27.0, 149.0], [27.1, 149.0], [27.2, 149.0], [27.3, 149.0], [27.4, 149.0], [27.5, 150.0], [27.6, 150.0], [27.7, 150.0], [27.8, 150.0], [27.9, 150.0], [28.0, 150.0], [28.1, 151.0], [28.2, 151.0], [28.3, 151.0], [28.4, 151.0], [28.5, 151.0], [28.6, 151.0], [28.7, 151.0], [28.8, 152.0], [28.9, 152.0], [29.0, 152.0], [29.1, 152.0], [29.2, 152.0], [29.3, 153.0], [29.4, 153.0], [29.5, 153.0], [29.6, 153.0], [29.7, 153.0], [29.8, 154.0], [29.9, 154.0], [30.0, 154.0], [30.1, 154.0], [30.2, 154.0], [30.3, 154.0], [30.4, 154.0], [30.5, 155.0], [30.6, 155.0], [30.7, 155.0], [30.8, 155.0], [30.9, 155.0], [31.0, 155.0], [31.1, 156.0], [31.2, 156.0], [31.3, 156.0], [31.4, 156.0], [31.5, 156.0], [31.6, 156.0], [31.7, 157.0], [31.8, 157.0], [31.9, 157.0], [32.0, 157.0], [32.1, 158.0], [32.2, 158.0], [32.3, 158.0], [32.4, 158.0], [32.5, 158.0], [32.6, 159.0], [32.7, 159.0], [32.8, 159.0], [32.9, 159.0], [33.0, 159.0], [33.1, 159.0], [33.2, 160.0], [33.3, 160.0], [33.4, 160.0], [33.5, 161.0], [33.6, 161.0], [33.7, 161.0], [33.8, 161.0], [33.9, 161.0], [34.0, 162.0], [34.1, 162.0], [34.2, 162.0], [34.3, 162.0], [34.4, 162.0], [34.5, 163.0], [34.6, 163.0], [34.7, 163.0], [34.8, 163.0], [34.9, 163.0], [35.0, 164.0], [35.1, 164.0], [35.2, 164.0], [35.3, 164.0], [35.4, 164.0], [35.5, 165.0], [35.6, 165.0], [35.7, 165.0], [35.8, 165.0], [35.9, 165.0], [36.0, 166.0], [36.1, 166.0], [36.2, 166.0], [36.3, 166.0], [36.4, 167.0], [36.5, 167.0], [36.6, 167.0], [36.7, 168.0], [36.8, 168.0], [36.9, 168.0], [37.0, 168.0], [37.1, 169.0], [37.2, 169.0], [37.3, 169.0], [37.4, 169.0], [37.5, 170.0], [37.6, 170.0], [37.7, 170.0], [37.8, 171.0], [37.9, 171.0], [38.0, 171.0], [38.1, 172.0], [38.2, 172.0], [38.3, 172.0], [38.4, 172.0], [38.5, 172.0], [38.6, 173.0], [38.7, 173.0], [38.8, 173.0], [38.9, 174.0], [39.0, 174.0], [39.1, 174.0], [39.2, 174.0], [39.3, 175.0], [39.4, 175.0], [39.5, 175.0], [39.6, 175.0], [39.7, 176.0], [39.8, 176.0], [39.9, 176.0], [40.0, 176.0], [40.1, 177.0], [40.2, 177.0], [40.3, 177.0], [40.4, 177.0], [40.5, 178.0], [40.6, 178.0], [40.7, 178.0], [40.8, 178.0], [40.9, 179.0], [41.0, 179.0], [41.1, 179.0], [41.2, 179.0], [41.3, 179.0], [41.4, 180.0], [41.5, 180.0], [41.6, 180.0], [41.7, 181.0], [41.8, 181.0], [41.9, 181.0], [42.0, 181.0], [42.1, 182.0], [42.2, 182.0], [42.3, 183.0], [42.4, 183.0], [42.5, 183.0], [42.6, 184.0], [42.7, 184.0], [42.8, 185.0], [42.9, 185.0], [43.0, 185.0], [43.1, 186.0], [43.2, 186.0], [43.3, 187.0], [43.4, 187.0], [43.5, 188.0], [43.6, 188.0], [43.7, 189.0], [43.8, 189.0], [43.9, 190.0], [44.0, 190.0], [44.1, 190.0], [44.2, 191.0], [44.3, 191.0], [44.4, 192.0], [44.5, 192.0], [44.6, 193.0], [44.7, 193.0], [44.8, 194.0], [44.9, 194.0], [45.0, 194.0], [45.1, 195.0], [45.2, 195.0], [45.3, 196.0], [45.4, 197.0], [45.5, 197.0], [45.6, 198.0], [45.7, 198.0], [45.8, 199.0], [45.9, 200.0], [46.0, 201.0], [46.1, 201.0], [46.2, 202.0], [46.3, 203.0], [46.4, 204.0], [46.5, 204.0], [46.6, 205.0], [46.7, 205.0], [46.8, 205.0], [46.9, 206.0], [47.0, 207.0], [47.1, 207.0], [47.2, 208.0], [47.3, 209.0], [47.4, 210.0], [47.5, 211.0], [47.6, 212.0], [47.7, 214.0], [47.8, 218.0], [47.9, 219.0], [48.0, 221.0], [48.1, 223.0], [48.2, 226.0], [48.3, 230.0], [48.4, 234.0], [48.5, 239.0], [48.6, 253.0], [48.7, 325.0], [48.8, 326.0], [48.9, 361.0], [49.0, 368.0], [49.1, 392.0], [49.2, 397.0], [49.3, 398.0], [49.4, 400.0], [49.5, 415.0], [49.6, 428.0], [49.7, 441.0], [49.8, 444.0], [49.9, 454.0], [50.0, 457.0], [50.1, 460.0], [50.2, 474.0], [50.3, 477.0], [50.4, 481.0], [50.5, 484.0], [50.6, 489.0], [50.7, 490.0], [50.8, 492.0], [50.9, 494.0], [51.0, 495.0], [51.1, 496.0], [51.2, 499.0], [51.3, 500.0], [51.4, 500.0], [51.5, 502.0], [51.6, 505.0], [51.7, 507.0], [51.8, 508.0], [51.9, 510.0], [52.0, 513.0], [52.1, 519.0], [52.2, 522.0], [52.3, 523.0], [52.4, 526.0], [52.5, 528.0], [52.6, 530.0], [52.7, 533.0], [52.8, 537.0], [52.9, 538.0], [53.0, 541.0], [53.1, 541.0], [53.2, 543.0], [53.3, 546.0], [53.4, 549.0], [53.5, 551.0], [53.6, 552.0], [53.7, 552.0], [53.8, 553.0], [53.9, 553.0], [54.0, 553.0], [54.1, 554.0], [54.2, 555.0], [54.3, 555.0], [54.4, 558.0], [54.5, 561.0], [54.6, 563.0], [54.7, 565.0], [54.8, 566.0], [54.9, 567.0], [55.0, 568.0], [55.1, 569.0], [55.2, 570.0], [55.3, 571.0], [55.4, 572.0], [55.5, 573.0], [55.6, 573.0], [55.7, 576.0], [55.8, 577.0], [55.9, 578.0], [56.0, 578.0], [56.1, 579.0], [56.2, 580.0], [56.3, 581.0], [56.4, 582.0], [56.5, 583.0], [56.6, 583.0], [56.7, 585.0], [56.8, 586.0], [56.9, 587.0], [57.0, 588.0], [57.1, 589.0], [57.2, 590.0], [57.3, 590.0], [57.4, 591.0], [57.5, 591.0], [57.6, 592.0], [57.7, 592.0], [57.8, 593.0], [57.9, 594.0], [58.0, 594.0], [58.1, 595.0], [58.2, 595.0], [58.3, 596.0], [58.4, 597.0], [58.5, 598.0], [58.6, 599.0], [58.7, 599.0], [58.8, 599.0], [58.9, 600.0], [59.0, 600.0], [59.1, 600.0], [59.2, 601.0], [59.3, 602.0], [59.4, 602.0], [59.5, 603.0], [59.6, 603.0], [59.7, 604.0], [59.8, 605.0], [59.9, 606.0], [60.0, 607.0], [60.1, 608.0], [60.2, 609.0], [60.3, 610.0], [60.4, 612.0], [60.5, 613.0], [60.6, 613.0], [60.7, 614.0], [60.8, 615.0], [60.9, 616.0], [61.0, 616.0], [61.1, 617.0], [61.2, 618.0], [61.3, 618.0], [61.4, 620.0], [61.5, 621.0], [61.6, 622.0], [61.7, 623.0], [61.8, 624.0], [61.9, 625.0], [62.0, 626.0], [62.1, 626.0], [62.2, 627.0], [62.3, 629.0], [62.4, 629.0], [62.5, 632.0], [62.6, 634.0], [62.7, 636.0], [62.8, 636.0], [62.9, 637.0], [63.0, 638.0], [63.1, 639.0], [63.2, 641.0], [63.3, 643.0], [63.4, 644.0], [63.5, 645.0], [63.6, 646.0], [63.7, 647.0], [63.8, 647.0], [63.9, 648.0], [64.0, 649.0], [64.1, 650.0], [64.2, 651.0], [64.3, 651.0], [64.4, 651.0], [64.5, 652.0], [64.6, 652.0], [64.7, 653.0], [64.8, 653.0], [64.9, 654.0], [65.0, 655.0], [65.1, 656.0], [65.2, 657.0], [65.3, 657.0], [65.4, 657.0], [65.5, 657.0], [65.6, 658.0], [65.7, 658.0], [65.8, 659.0], [65.9, 659.0], [66.0, 661.0], [66.1, 662.0], [66.2, 663.0], [66.3, 664.0], [66.4, 665.0], [66.5, 668.0], [66.6, 669.0], [66.7, 671.0], [66.8, 672.0], [66.9, 672.0], [67.0, 674.0], [67.1, 675.0], [67.2, 676.0], [67.3, 677.0], [67.4, 678.0], [67.5, 679.0], [67.6, 679.0], [67.7, 680.0], [67.8, 680.0], [67.9, 681.0], [68.0, 682.0], [68.1, 683.0], [68.2, 684.0], [68.3, 685.0], [68.4, 687.0], [68.5, 687.0], [68.6, 688.0], [68.7, 688.0], [68.8, 689.0], [68.9, 689.0], [69.0, 690.0], [69.1, 690.0], [69.2, 691.0], [69.3, 692.0], [69.4, 692.0], [69.5, 693.0], [69.6, 694.0], [69.7, 694.0], [69.8, 695.0], [69.9, 697.0], [70.0, 697.0], [70.1, 698.0], [70.2, 699.0], [70.3, 700.0], [70.4, 700.0], [70.5, 701.0], [70.6, 701.0], [70.7, 701.0], [70.8, 702.0], [70.9, 702.0], [71.0, 703.0], [71.1, 703.0], [71.2, 704.0], [71.3, 704.0], [71.4, 705.0], [71.5, 705.0], [71.6, 706.0], [71.7, 706.0], [71.8, 708.0], [71.9, 709.0], [72.0, 710.0], [72.1, 711.0], [72.2, 712.0], [72.3, 712.0], [72.4, 712.0], [72.5, 713.0], [72.6, 713.0], [72.7, 713.0], [72.8, 714.0], [72.9, 714.0], [73.0, 715.0], [73.1, 715.0], [73.2, 715.0], [73.3, 716.0], [73.4, 718.0], [73.5, 719.0], [73.6, 719.0], [73.7, 720.0], [73.8, 721.0], [73.9, 722.0], [74.0, 722.0], [74.1, 723.0], [74.2, 725.0], [74.3, 727.0], [74.4, 728.0], [74.5, 729.0], [74.6, 730.0], [74.7, 730.0], [74.8, 730.0], [74.9, 731.0], [75.0, 732.0], [75.1, 732.0], [75.2, 733.0], [75.3, 734.0], [75.4, 734.0], [75.5, 735.0], [75.6, 736.0], [75.7, 736.0], [75.8, 737.0], [75.9, 738.0], [76.0, 740.0], [76.1, 741.0], [76.2, 741.0], [76.3, 742.0], [76.4, 743.0], [76.5, 744.0], [76.6, 744.0], [76.7, 746.0], [76.8, 748.0], [76.9, 749.0], [77.0, 750.0], [77.1, 751.0], [77.2, 751.0], [77.3, 751.0], [77.4, 752.0], [77.5, 752.0], [77.6, 752.0], [77.7, 753.0], [77.8, 753.0], [77.9, 753.0], [78.0, 754.0], [78.1, 754.0], [78.2, 754.0], [78.3, 755.0], [78.4, 755.0], [78.5, 756.0], [78.6, 756.0], [78.7, 757.0], [78.8, 757.0], [78.9, 758.0], [79.0, 758.0], [79.1, 759.0], [79.2, 759.0], [79.3, 760.0], [79.4, 760.0], [79.5, 761.0], [79.6, 762.0], [79.7, 763.0], [79.8, 764.0], [79.9, 765.0], [80.0, 765.0], [80.1, 765.0], [80.2, 766.0], [80.3, 766.0], [80.4, 766.0], [80.5, 767.0], [80.6, 768.0], [80.7, 769.0], [80.8, 771.0], [80.9, 772.0], [81.0, 773.0], [81.1, 773.0], [81.2, 774.0], [81.3, 774.0], [81.4, 776.0], [81.5, 776.0], [81.6, 777.0], [81.7, 778.0], [81.8, 779.0], [81.9, 779.0], [82.0, 780.0], [82.1, 781.0], [82.2, 782.0], [82.3, 784.0], [82.4, 785.0], [82.5, 786.0], [82.6, 787.0], [82.7, 788.0], [82.8, 789.0], [82.9, 790.0], [83.0, 791.0], [83.1, 792.0], [83.2, 793.0], [83.3, 794.0], [83.4, 795.0], [83.5, 796.0], [83.6, 796.0], [83.7, 798.0], [83.8, 799.0], [83.9, 800.0], [84.0, 802.0], [84.1, 803.0], [84.2, 805.0], [84.3, 806.0], [84.4, 807.0], [84.5, 810.0], [84.6, 813.0], [84.7, 815.0], [84.8, 818.0], [84.9, 819.0], [85.0, 821.0], [85.1, 822.0], [85.2, 822.0], [85.3, 822.0], [85.4, 822.0], [85.5, 823.0], [85.6, 823.0], [85.7, 824.0], [85.8, 824.0], [85.9, 825.0], [86.0, 825.0], [86.1, 826.0], [86.2, 827.0], [86.3, 828.0], [86.4, 829.0], [86.5, 830.0], [86.6, 831.0], [86.7, 832.0], [86.8, 833.0], [86.9, 833.0], [87.0, 834.0], [87.1, 834.0], [87.2, 835.0], [87.3, 836.0], [87.4, 836.0], [87.5, 836.0], [87.6, 837.0], [87.7, 837.0], [87.8, 838.0], [87.9, 838.0], [88.0, 839.0], [88.1, 839.0], [88.2, 839.0], [88.3, 840.0], [88.4, 840.0], [88.5, 841.0], [88.6, 842.0], [88.7, 843.0], [88.8, 843.0], [88.9, 844.0], [89.0, 844.0], [89.1, 845.0], [89.2, 845.0], [89.3, 847.0], [89.4, 847.0], [89.5, 848.0], [89.6, 848.0], [89.7, 849.0], [89.8, 849.0], [89.9, 849.0], [90.0, 850.0], [90.1, 850.0], [90.2, 850.0], [90.3, 851.0], [90.4, 851.0], [90.5, 852.0], [90.6, 854.0], [90.7, 855.0], [90.8, 856.0], [90.9, 858.0], [91.0, 859.0], [91.1, 863.0], [91.2, 864.0], [91.3, 866.0], [91.4, 868.0], [91.5, 870.0], [91.6, 871.0], [91.7, 873.0], [91.8, 875.0], [91.9, 876.0], [92.0, 877.0], [92.1, 878.0], [92.2, 880.0], [92.3, 883.0], [92.4, 884.0], [92.5, 886.0], [92.6, 889.0], [92.7, 889.0], [92.8, 890.0], [92.9, 890.0], [93.0, 891.0], [93.1, 892.0], [93.2, 895.0], [93.3, 897.0], [93.4, 899.0], [93.5, 901.0], [93.6, 902.0], [93.7, 903.0], [93.8, 904.0], [93.9, 905.0], [94.0, 906.0], [94.1, 907.0], [94.2, 908.0], [94.3, 909.0], [94.4, 910.0], [94.5, 912.0], [94.6, 913.0], [94.7, 915.0], [94.8, 916.0], [94.9, 918.0], [95.0, 920.0], [95.1, 922.0], [95.2, 927.0], [95.3, 928.0], [95.4, 931.0], [95.5, 933.0], [95.6, 941.0], [95.7, 945.0], [95.8, 949.0], [95.9, 950.0], [96.0, 959.0], [96.1, 961.0], [96.2, 962.0], [96.3, 965.0], [96.4, 968.0], [96.5, 969.0], [96.6, 974.0], [96.7, 977.0], [96.8, 980.0], [96.9, 983.0], [97.0, 987.0], [97.1, 996.0], [97.2, 1001.0], [97.3, 1006.0], [97.4, 1010.0], [97.5, 1016.0], [97.6, 1024.0], [97.7, 1029.0], [97.8, 1033.0], [97.9, 1041.0], [98.0, 1053.0], [98.1, 1058.0], [98.2, 1062.0], [98.3, 1070.0], [98.4, 1073.0], [98.5, 1078.0], [98.6, 1096.0], [98.7, 1123.0], [98.8, 1150.0], [98.9, 1198.0], [99.0, 1257.0], [99.1, 1267.0], [99.2, 1323.0], [99.3, 34889.0], [99.4, 34987.0], [99.5, 35095.0], [99.6, 35341.0], [99.7, 35388.0], [99.8, 35404.0], [99.9, 35416.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 5600.0, "series": [{"data": [[0.0, 841.0], [34800.0, 3.0], [34700.0, 11.0], [35300.0, 23.0], [35000.0, 16.0], [34900.0, 18.0], [35400.0, 34.0], [35100.0, 6.0], [600.0, 1607.0], [700.0, 1905.0], [200.0, 389.0], [800.0, 1346.0], [900.0, 522.0], [1000.0, 210.0], [1100.0, 37.0], [300.0, 108.0], [1200.0, 39.0], [1300.0, 3.0], [100.0, 5600.0], [400.0, 264.0], [500.0, 1063.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 35400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 111.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7226.0, "series": [{"data": [[0.0, 7226.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6708.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 111.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 55.7592954990216, "minX": 1.57676418E12, "maxY": 141.0563121089445, "series": [{"data": [[1.57676418E12, 55.7592954990216], [1.57676424E12, 141.0563121089445], [1.5767643E12, 110.96396396396396]], "isOverall": false, "label": "1. Save API", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5767643E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 19525.469696969696, "series": [{"data": [[2.0, 12.555555555555555], [3.0, 16.538461538461537], [4.0, 18.214285714285715], [5.0, 17.1578947368421], [6.0, 22.294117647058822], [7.0, 25.124999999999996], [8.0, 40.666666666666664], [9.0, 48.5], [10.0, 32.78947368421052], [11.0, 41.42857142857143], [12.0, 43.95], [13.0, 42.42105263157894], [14.0, 46.31249999999999], [15.0, 55.40909090909091], [16.0, 63.73333333333334], [17.0, 73.00000000000001], [18.0, 56.95238095238095], [19.0, 56.57894736842105], [20.0, 57.68000000000001], [21.0, 63.099999999999994], [22.0, 68.55000000000001], [23.0, 67.4130434782609], [24.0, 70.20833333333334], [25.0, 64.7241379310345], [26.0, 70.58333333333334], [27.0, 68.76], [28.0, 71.95833333333333], [29.0, 76.125], [30.0, 77.8695652173913], [31.0, 94.3428571428571], [32.0, 96.69999999999997], [33.0, 105.15], [34.0, 89.09523809523809], [35.0, 91.37500000000003], [36.0, 162.11111111111111], [37.0, 181.83333333333331], [38.0, 141.13636363636365], [39.0, 103.96774193548387], [40.0, 105.31250000000001], [41.0, 112.73076923076924], [42.0, 116.95454545454545], [43.0, 122.32], [44.0, 116.39622641509435], [45.0, 114.76923076923077], [46.0, 122.6], [47.0, 150.5263157894737], [48.0, 167.47368421052633], [49.0, 125.03773584905663], [50.0, 107.55319148936168], [51.0, 115.07407407407408], [52.0, 106.52], [53.0, 121.39999999999999], [54.0, 125.86486486486488], [55.0, 119.8269230769231], [56.0, 118.43333333333335], [57.0, 109.22222222222221], [58.0, 113.37333333333335], [59.0, 114.64516129032259], [60.0, 115.13888888888889], [61.0, 119.20454545454545], [62.0, 113.86567164179105], [63.0, 126.63043478260867], [64.0, 134.29090909090908], [65.0, 152.02222222222215], [66.0, 141.36363636363635], [67.0, 129.15909090909088], [68.0, 122.77777777777777], [69.0, 126.97777777777777], [70.0, 129.4], [71.0, 122.80392156862749], [72.0, 130.63095238095244], [73.0, 127.24107142857143], [74.0, 137.5357142857143], [75.0, 139.25806451612902], [76.0, 153.09677419354836], [77.0, 163.7058823529412], [78.0, 137.86915887850472], [79.0, 134.4769230769231], [80.0, 136.5303030303031], [81.0, 148.45833333333331], [82.0, 144.76666666666665], [83.0, 140.71428571428572], [84.0, 161.5806451612903], [85.0, 198.63636363636365], [86.0, 169.55999999999995], [87.0, 138.0886075949367], [88.0, 149.43333333333334], [89.0, 151.2682926829268], [90.0, 156.34246575342465], [91.0, 150.60606060606057], [92.0, 149.08749999999992], [93.0, 154.40000000000003], [94.0, 177.39436619718316], [95.0, 156.328125], [96.0, 152.11999999999998], [97.0, 137.4246575342466], [98.0, 141.14035087719293], [99.0, 139.89705882352942], [100.0, 150.49006622516552], [101.0, 132.83720930232556], [102.0, 138.9583333333333], [103.0, 164.14342629482078], [104.0, 188.93432835820892], [105.0, 164.8835341365463], [106.0, 157.8322147651008], [107.0, 165.1384615384615], [108.0, 322.4660633484161], [109.0, 167.6129032258064], [110.0, 1029.9512195121952], [111.0, 19525.469696969696], [112.0, 184.30357142857142], [113.0, 227.503816793893], [114.0, 257.17916666666656], [115.0, 305.2361963190181], [116.0, 177.09205020920513], [117.0, 355.0430107526882], [118.0, 293.4724409448819], [119.0, 442.4571428571429], [122.0, 506.60204081632645], [123.0, 462.5983606557378], [121.0, 639.051282051282], [120.0, 661.1851851851851], [124.0, 566.127659574468], [126.0, 580.0172413793105], [127.0, 539.2972972972973], [125.0, 620.2758620689654], [128.0, 571.7272727272726], [129.0, 569.6666666666666], [130.0, 592.7256097560976], [131.0, 659.0], [133.0, 560.3333333333333], [135.0, 622.951327433628], [134.0, 610.1162790697674], [132.0, 704.7857142857142], [136.0, 534.5961538461537], [137.0, 608.0000000000001], [138.0, 645.4423076923078], [140.0, 626.8750000000002], [141.0, 646.1489361702128], [142.0, 656.3555555555555], [143.0, 566.6810344827588], [139.0, 662.1212121212121], [144.0, 677.7647058823529], [145.0, 602.2566371681414], [150.0, 707.835], [151.0, 598.2222222222223], [149.0, 867.5], [148.0, 718.7764705882354], [147.0, 668.6875], [146.0, 657.0748663101606], [152.0, 661.9821428571425], [153.0, 791.4774774774776], [154.0, 754.0140845070423], [156.0, 773.0526315789473], [157.0, 680.6291390728478], [159.0, 662.4999999999998], [158.0, 679.9387755102041], [155.0, 765.4594594594594], [160.0, 743.5073891625614], [161.0, 726.923076923077], [163.0, 822.4910714285714], [165.0, 660.4090909090909], [166.0, 698.6451612903227], [167.0, 770.2083333333335], [164.0, 797.4285714285714], [162.0, 825.8455882352944], [168.0, 757.1442307692307], [169.0, 825.1558441558444], [172.0, 782.9999999999998], [173.0, 772.943820224719], [175.0, 713.1666666666667], [174.0, 826.9701492537315], [171.0, 852.9090909090911], [170.0, 870.3333333333334], [176.0, 772.6046511627908], [178.0, 860.675257731959], [181.0, 767.5555555555554], [182.0, 768.4134615384619], [183.0, 772.0640394088671], [180.0, 855.9959183673467], [179.0, 1034.1702127659578], [177.0, 838.5], [184.0, 746.9069767441862], [186.0, 869.9156626506029], [187.0, 816.5660377358491], [188.0, 773.5308056872037], [190.0, 819.117117117117], [191.0, 920.7777777777778], [189.0, 761.0336134453781], [185.0, 784.4761904761904], [192.0, 861.9133333333332], [194.0, 820.2727272727274], [193.0, 912.2999999999997], [196.0, 812.7460317460318], [195.0, 865.6851851851852], [197.0, 860.7880794701989], [1.0, 9.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}, {"data": [[122.1982912068349, 714.8435742257037]], "isOverall": false, "label": "Save API HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 197.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.57676418E12, "maxY": 3050828.7333333334, "series": [{"data": [[1.57676418E12, 14665.7], [1.57676424E12, 51985.26666666667], [1.5767643E12, 3823.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57676418E12, 860677.3], [1.57676424E12, 3050828.7333333334], [1.5767643E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5767643E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 116.11252446183951, "minX": 1.57676418E12, "maxY": 35196.504504504504, "series": [{"data": [[1.57676418E12, 116.11252446183951], [1.57676424E12, 531.5757269046726], [1.5767643E12, 35196.504504504504]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5767643E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.57676418E12, "maxY": 531.5719543614272, "series": [{"data": [[1.57676418E12, 116.10404435746888], [1.57676424E12, 531.5719543614272], [1.5767643E12, 0.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5767643E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009784735812133096, "minX": 1.57676418E12, "maxY": 0.048859035701141, "series": [{"data": [[1.57676418E12, 0.009784735812133096], [1.57676424E12, 0.048859035701141], [1.5767643E12, 0.04504504504504502]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5767643E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57676418E12, "maxY": 1325.0, "series": [{"data": [[1.57676418E12, 253.0], [1.57676424E12, 1325.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57676418E12, 5.0], [1.57676424E12, 98.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57676418E12, 162.0], [1.57676424E12, 869.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57676418E12, 210.0], [1.57676424E12, 1074.3099999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57676418E12, 181.0], [1.57676424E12, 929.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676424E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 19.0, "minX": 93.0, "maxY": 35346.0, "series": [{"data": [[541.0, 144.0], [555.0, 133.0], [581.0, 150.0], [619.0, 149.0], [633.0, 164.0], [628.0, 159.0], [671.0, 162.0], [644.0, 173.5], [93.0, 19.0], [103.0, 641.0], [158.0, 669.5], [162.0, 765.0], [175.0, 961.0], [181.0, 600.0], [176.0, 711.0], [180.0, 837.0], [191.0, 829.0], [193.0, 839.0], [197.0, 571.0], [202.0, 730.0], [200.0, 771.5], [211.0, 795.0], [213.0, 710.0], [215.0, 618.0], [219.0, 860.0], [222.0, 596.0], [218.0, 610.0], [227.0, 819.0], [224.0, 773.0], [231.0, 653.0], [238.0, 490.5], [236.0, 770.0], [244.0, 631.5], [254.0, 751.0], [271.0, 324.0], [259.0, 582.0], [256.0, 836.0], [257.0, 837.0], [273.0, 687.0], [306.0, 117.0], [308.0, 775.0], [348.0, 77.5], [461.0, 114.0], [491.0, 125.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[111.0, 35346.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 671.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 93.0, "maxY": 961.0, "series": [{"data": [[541.0, 144.0], [555.0, 133.0], [581.0, 150.0], [619.0, 149.0], [633.0, 164.0], [628.0, 159.0], [671.0, 162.0], [644.0, 173.5], [93.0, 19.0], [103.0, 641.0], [158.0, 669.5], [162.0, 765.0], [175.0, 961.0], [181.0, 600.0], [176.0, 711.0], [180.0, 837.0], [191.0, 829.0], [193.0, 839.0], [197.0, 571.0], [202.0, 730.0], [200.0, 771.5], [211.0, 795.0], [213.0, 710.0], [215.0, 618.0], [219.0, 860.0], [222.0, 596.0], [218.0, 610.0], [227.0, 819.0], [224.0, 773.0], [231.0, 653.0], [238.0, 490.5], [236.0, 770.0], [244.0, 631.5], [254.0, 751.0], [271.0, 324.0], [259.0, 582.0], [256.0, 836.0], [257.0, 837.0], [273.0, 687.0], [306.0, 117.0], [308.0, 775.0], [348.0, 77.5], [461.0, 114.0], [491.0, 125.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[111.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 671.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 52.56666666666667, "minX": 1.57676418E12, "maxY": 181.51666666666668, "series": [{"data": [[1.57676418E12, 52.56666666666667], [1.57676424E12, 181.51666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57676424E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.57676418E12, "maxY": 181.13333333333333, "series": [{"data": [[1.57676418E12, 51.1], [1.57676424E12, 181.13333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5767643E12, 1.85]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5767643E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.57676418E12, "maxY": 181.13333333333333, "series": [{"data": [[1.5767643E12, 1.85]], "isOverall": false, "label": "Save API HTTP Request-failure", "isController": false}, {"data": [[1.57676418E12, 51.1], [1.57676424E12, 181.13333333333333]], "isOverall": false, "label": "Save API HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5767643E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.85, "minX": 1.57676418E12, "maxY": 181.13333333333333, "series": [{"data": [[1.57676418E12, 51.1], [1.57676424E12, 181.13333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5767643E12, 1.85]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5767643E12, "title": "Total Transactions Per Second"}},
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

