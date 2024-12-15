<?php 
function mrseadev_responsive_iframe($content)
{
    $content = preg_replace('/<iframe(.*?)width=".*?"(.*?)>/i', '<iframe$1$2>', $content);
    $content = preg_replace('/<iframe(.*?)height=".*?"(.*?)>/i', '<iframe$1$2>', $content);
    $content = str_replace(
        '<iframe',
        '<iframe class="iframe-two-wrap"',
        $content
    );
    $content = str_replace('</iframe>', '</iframe>', $content);
    return $content;
}
