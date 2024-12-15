<?php
// for wordpress

while (have_posts()) :
    the_post();
?>
    <div class="mrs-single-content">
        <?php
        ob_start();
        the_content();
        $content = ob_get_clean();
        echo mrseadev_responsive_iframe($content);
        ?>
    </div>
<?php
endwhile;
?>