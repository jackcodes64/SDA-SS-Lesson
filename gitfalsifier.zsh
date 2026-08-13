
min=0
max=7
start_date="2017-11-05"
start=$(date -d "$start_date" +%s)
end=$(date -d "today" +%s)

while [ "$start" -le "$end" ]; do
    current_date=$(date -d "@$start" +"%Y-%m-%d 12:00:00")
    selected=$(( RANDOM % (max - min) + min ))

    echo "Commits: $selected"
    echo "Date: $(date -d "@$start" +%Y-%m-%d)"

    for ((j=1; j<= selected; j++))
    do      
        echo "$current_date" >> gringo.c++
        git add gringo.c++
        GIT_AUTHOR_DATE="$current_date" GIT_COMMITTER_DATE="$current_date" git commit -m "Update gringo.c++ step $j"
        echo "inner looop"
    done
    start=$((start + 86400))
done