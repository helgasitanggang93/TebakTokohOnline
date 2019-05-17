<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
            </div>
            <div class="col-6">
                <div class="row mt-5">
                    <div class="col" style=" text-align: center;">
                        <h1 class="animated heartBeat" style="animation-iteration-count: infinite;font-family: 'Baloo Bhai', cursive;">Live Score</h1>
                    </div>
                </div>
                <div class="scoreboard mt-3 animated slideInRight" style="border:1px solid black; background-color: black; color: white; 
                height: 230px; text-align: center;font-family: 'Baloo Bhai', cursive;">
                    <div class="row mt-3">
                        <div class="col">
                            <h1>Player 1 </h1>
                        </div>
                        <div class="col">
                            <h1>Player 2</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h1>VS</h1>
                        </div>
                    </div>
                    <div class="row" style="text-align:center;font-size: 80px; font-family: 'Orbitron', sans-serif; color: red">
                        <div class="col" style="border-style: solid;border-color: white">
                            <p>0</p>
                        </div>
                        <div class="col" style="border-style: solid;border-color: white">
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>