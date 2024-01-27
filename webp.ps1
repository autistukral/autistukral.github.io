Get-ChildItem |`
    Where-Object { $_.Extension -eq ".jpg" -or $_.Extension -eq ".png" } |`
    ForEach-Object { Invoke-Expression ("cwebp -q 80 " + $_.Name + " -o " + $_.BaseName + ".webp") }
pause