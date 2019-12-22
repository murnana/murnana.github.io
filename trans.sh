find ./source -iname "*.rst" -type f | while read FILE
do
    path=${FILE#./}
    string_filename=${path##*/}
    string_filename_without_extension=${string_filename%.*}
    string_path=${path%/*}
    html_path=${string_path#input}
    html_file_name=${string_filename_without_extension}.md
    html_output_path=${html_path}/${html_file_name}

    echo "##File Info##"
    echo $path
    echo ${string_filename}
    echo ${string_filename_without_extension}
    echo ${string_path}
    echo $html_path
    echo $html_file_name
    echo "output path"
    echo $html_output_path
    echo "#############"

    mkdir -p "./gfm/${html_path}"
    pandoc "$path" -s -f rst -t gfm -o "./gfm/${html_output_path}"

    mkdir -p "./markdown/${html_path}"
    pandoc "$path" -s -f rst -t markdown -o "./markdown/${html_output_path}"

    mkdir -p "./markdown_mmd/${html_path}"
    pandoc "$path" -s -f rst -t markdown_mmd -o "./markdown_mmd${html_output_path}"

    mkdir -p "./markdown_phpextra/${html_path}"
    pandoc "$path" -s -f rst -t markdown_phpextra -o "./markdown_phpextra/${html_output_path}"

    mkdir -p "./markdown_strict/${html_path}"
    pandoc "$path" -s -f rst -t markdown_strict -o "./markdown_strict/${html_output_path}"
done
