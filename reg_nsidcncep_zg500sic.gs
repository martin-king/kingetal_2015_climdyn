function reg(args)

*file 1 sic
*file 2 zg
*file 3 sic
*1 and 3 dont have to be same

ts=subwrd(args,1)
te=subwrd(args,2)
ts1=ts+2
te1=te-2
tt=te-ts+1
'reset'
'/Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/scripts/polst 10 n'
*'set mpvals 120 240 30 90'
*'set lon 120 240'
*'set lat 30 90'
*'set mproj nps'
*'set mpvals -60 90 60 80'
*'set lon -60 90'
*'set lat 60 80'
*'set mproj nps'

*for speedynemo 
*'set t 1 34'
'set t 'ts' 'te
* Barents seas 
'sicpav=aave(100*sic.1,lon=0,lon=90,lat=75,lat=85)'
*'sicpav=aave(zg500.2,lon=30,lon=120,lat=50,lat=70)'
*'sicpav=aave(100*sic.1,lon=0,lon=180,lat=75,lat=85)'
*'nam=aave(zg500.2,lon=-180,lon=180,lat=40,lat=60)-aave(zg500.2,lon=-180,lon=180,lat=70,lat=90)'
*below just using nam variable to define other time series
*'nam=-aave(zg500.2,lon=60,lon=120,lat=70,lat=90)'
*'nam=aave(zg500.2,lon=-90,lon=0,lat=50,lat=80)-aave(zg500.2,lon=90,lon=180,lat=70,lat=90)'
*'nam=-aave(zg500.2,lon=0,lon=90,lat=70,lat=90)'
*'nam=aave(zg500.2,lon=0,lon=60,lat=70,lat=78)'
*'nam=aave(zg500.2,lon=-30,lon=30,lat=60,lat=78)'
'nam=aave(zg500.2,lon=0,lon=30,lat=60,lat=70)'

'set t 1'
'sicpavm=ave(sicpav,t='ts',t='te')'
'namav=ave(nam,t='ts',t='te')'
'set t 'ts' 'te
'sicanom=sicpav-sicpavm'
'namanom=nam-namav'

'set t 'ts1' 'te1
'sicanomfil=ave(sicanom,t-2,t+2)'
'sicanomfiht=sicanom-sicanomfil'
'sicanomfihav=ave(sicanomfiht,t='ts1',t='te1')'
'sicanomfih=sicanomfiht-sicanomfihav'
*
'namanomfil=ave(namanom,t-2,t+2)'
'namanomfiht=namanom-namanomfil'
'namanomfihav=ave(namanomfiht,t='ts1',t='te1')'
'namanomfih=namanomfiht-namanomfihav'

'sic32dfil=ave(100*sic.3,t-2,t+2)'
'sic32danomfiht=100*sic.3-sic32dfil'
'sic32danomfih=sic32danomfiht-ave(sic32danomfiht,t='ts1',t='te1')'

*'set t 'ts+20' 'te-20
*'namfil=ave(nam,t-20,t+20)'
*'sicfil=ave(sicpav,t-20,t+20)'

'set t 1'
'zgav2d=ave(zg500.2,t='ts',t='te')'
'set t 'ts' 'te
'zganom2d=zg500.2-zgav2d'

'set t 'ts1' 'te1
'zganom2dfil=ave(zganom2d,t-2,t+2)'
'zganom2dfiht=zganom2d-zganom2dfil'
'zganom2dfih=zganom2dfiht-ave(zganom2dfiht,t='ts1',t='te1')'
*'tslp=aave(zganom2dfih,lon=60,lon=150,lat=70,lat=85)'
*'tslpanom=tslp-ave(tslp,t='ts1',t='te1')'

*'cova2d=maskout(sicanomfih,-sicanomfih)*maskout(zganom2dfih,-sicanomfih)'
'cova2d=sicanomfih*zganom2dfih'
'cova2ds1=namanomfih*sic32danomfih'
'cova2ds3=namanomfih*sic32danomfih'

'set t 1'
'sicvar=ave(pow(sicanomfih,2),t='ts1',t='te1')'
'zgvar=ave(pow(namanomfih,2),t='ts1',t='te1')'
'sic32dvar=ave(pow(sic32danomfih,2),t='ts1',t='te1')'
'zg2dvar=ave(pow(zganom2dfih,2),t='ts1',t='te1')'

*'tslpvar=ave(pow(tslpanom,2),t='ts1',t='te1')'

'reg2d=ave(cova2d,t='ts1',t='te1')/sqrt(sicvar)'
'reg2dcor=ave(cova2d,t='ts1',t='te1')/sqrt(sicvar)/sqrt(zg2dvar)'
'reg2ds1=ave(cova2ds1,t='ts1',t='te1')/sqrt(zgvar)/sqrt(sic32dvar)'
'reg2ds1=maskout(reg2ds1,85-lat)'
'reg2ds3=ave(cova2ds3,t='ts1',t='te1')/sqrt(zgvar)'
'covvar2d=ave(pow(cova2d/sqrt(sicvar)-reg2d,2),t='ts1',t='te1')'
'tstat2d=abs(ave(cova2d/sqrt(sicvar),t='ts1',t='te1'))/sqrt(covvar2d)*sqrt('tt')'

'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/rgbset.gs'

'set grads off'
'set display color white'
'set mpdraw on'
'set rgb 17 100 100 100'
'set map 17 1 6'
'set ylint 20'
'set xlint 30'
'set grid on 5 1'
'set gxout shaded'
*'set rgb 16 200 200 200'
*'set rbcols 16'
*'set cmax -0.1'
*'d reg2d'
*'set cmin 0'
*'d tstat2d-1.7'
'set clevs  0 10 20 30'
'set ccols  0 22 73 24 25'
'd maskout(reg2dcor*reg2dcor*100,tstat2d-1.8)'
'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/cbar.gs 1.2 0 4.3 1.2'
* cbar.gs sf vert xmid ymid

'set gxout contour'
'set clab off'
'set cint 50'
'set cmax -0.1'
*'set ccolor 1'
'set ccolor 58'
*'set clevs -15 -10 -5'
'set clopts -1 -1 0.15'
*'set clskip 2'
'set cstyle 2'
'set cthick 9'
'd reg2d'
'set cint 50'
'set cmin 0.1'
'set cstyle 1'
*'set ccolor 1'
*'set ccolor 69'
'set ccolor 28'
*'set clevs 3 6 9 12 15 18 21 24'
'd reg2d'
'set clevs 0'
'set ccolor 1'
'set cstyle 1'
'set grads off'
'set mpdraw off'
'set cthick 12'
'set clopts -1 -1 0.15'
'set clab on'
'd reg2d'

*'run /Volumes/SEAGATE1/stuff_from_ictp_visit_16nov2010.dir/from_martin_king_scratch/scripts/pl_rbth_o reg2d 0.2'

return
