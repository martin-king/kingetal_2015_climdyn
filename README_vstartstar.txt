General steps.
1. Download daily data using wget.
2. Run cdo_filter.py for v and T.
3. Run calc_vstarTstar.gs, which produces daily data vstarTstar year by year.
4. Create monthly means files of vstarTstar using cdo_monmean_vstartstar.py.
5. Merge yearly files of monthly means to ncep_vstartstar_mon_1979_2013_10daylowpass.nc or ncep_vstartstar_mon_1979_2013_10dayhighpass.nc using cdo mergetime.
