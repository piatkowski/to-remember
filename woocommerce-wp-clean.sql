DELETE FROM wp_term_relationships WHERE object_id IN (SELECT ID FROM wp_posts WHERE post_type = 'shop_order');
DELETE FROM wp_postmeta WHERE post_id IN (SELECT ID FROM wp_posts WHERE post_type = 'shop_order');
DELETE FROM wp_posts WHERE post_type = 'shop_order';
DELETE wu FROM `wp_users` wu INNER JOIN wp_usermeta ON wu.ID = wp_usermeta.user_id WHERE meta_key = 'wp_capabilities' AND meta_value NOT LIKE '%administrator%';
DELETE FROM wp_usermeta
WHERE NOT EXISTS (
  SELECT * FROM wp_users
	WHERE wp_usermeta.user_id = wp_users.ID
);
DELETE pm
FROM wp_postmeta pm
LEFT JOIN wp_posts wp ON wp.ID = pm.post_id
WHERE wp.ID IS NULL;

DELETE FROM wp_actionscheduler_actions;
DELETE FROM wp_wc_order_stats;
